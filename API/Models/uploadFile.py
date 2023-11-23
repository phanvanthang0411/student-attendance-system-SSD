from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename
import os
import cv2

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Image.db'
db = SQLAlchemy(app)

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(255), nullable=False)
    prediction = db.Column(db.String(255))


UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload_and_predict', methods=['POST'])
def upload_and_predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image files have been uploaded!'}), 400
    image = request.files['image']
    if image and allowed_file(image.filename):
        filename = secure_filename(image.filename)
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        image.save(image_path)
        # Call funtion face recognition
        prediction_result = predict_faces(image_path)
        # Lưu ảnh và kết quả vào cơ sở dữ liệu
        new_image = Image(filename=filename, prediction=prediction_result)
        db.session.add(new_image)
        db.session.commit()
        return jsonify({'message': 'Upload and predict successfully!', 'prediction': prediction_result}), 201
    else:
        return jsonify({'error': 'Invalid file type! Allowed types are png, jpg, jpeg, gif.'}), 400

def predict_faces(image_path):
    image = cv2.imread(image_path)
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(gray_image, scaleFactor=1.3, minNeighbors=5)
    for (x, y, w, h) in faces:
        cv2.rectangle(image, (x, y), (x+w, y+h), (255, 0, 0), 2)
    cv2.imwrite('result_image.jpg', image)
    return 'result_image.jpg'


# Start backend
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
