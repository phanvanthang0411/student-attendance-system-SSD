# from db import db


# class Img(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     img = db.Column(db.Text, unique=True, nullable=False)
#     name = db.Column(db.Text, nullable=False)
#     mimetype = db.Column(db.Text, nullable=False)


# # from flask import Flask, request, jsonify
# # from flask_sqlalchemy import SQLAlchemy
# # from datetime import datetime
# # from werkzeug.utils import secure_filename
# # import base64
# # from db import db

# # app = Flask(__name__)
# # app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///images.db'
# # app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# # db = SQLAlchemy(app)
# # # Model Image
# # class Image(db.Model):
# #     Id = db.Column(db.Integer, primary_key=True)
# #     FileName = db.Column(db.String(100), nullable= False)
# #     # Base64 = db.Column(db.String(10000), unique = True)


# # #Route Upload One Image
# # @app.route('/upload_image', methods=['POST'])
# # def upload_image():
# #     image = request.files['image']
# #     if 'image' not in request.files:
# #         return jsonify({'error': 'No image files have been uploaded!'}), 400
# #     filename = secure_filename(image.filename)
# #     db.session.add(new_image)
# #     db.session.commit()
# #     return jsonify({'message': 'Upload image successfully!'}), 201

# # #Route Upload Multiple Image
# # @app.route('/upload_images', methods=['POST'])
# # def upload_images():
# #     data = request.get_json()
# #     images_data = data.get('images')
# #     if images_data is None or not isinstance(images_data, list):
# #         return jsonify({'error': 'Invalid photo data !'}), 400
# #     for image_data in images_data:
# #         name = image_data.get('name')
# #         data_base64 = image_data.get('data_base64')
# #         new_image = Image(FileName=filename, Base64=data_base64)
# #         db.session.add(new_image)
# #     db.session.commit()
# #     return jsonify({'message': 'Upload multiple image successfully!'}), 201

# # # Start backend
# # if __name__ == '__main__':
# #     with app.app_context():
# #         db.create_all()
# #     app.run(debug=True)
