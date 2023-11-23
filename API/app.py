# from flask import Flask, request
# from flask_sqlalchemy import SQLAlchemy
# from db import db, db_init
# from werkzeug.utils import secure_filename
# from filedetails import Img
# from Models.student import Student

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Img.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db.init_app(app)


# @app.route('/upload', methods=['POST'])
# def uploadImage():
#     image = request.files['image']
#     if not image:
#         return "No image uploaded", 400
#     filename = secure_filename(image.filename)
#     mimetype = image.mimetype
    
#     img = Img(img = image.read(), mimetype = mimetype, name = filename)
#     db.session.add(img)
#     db.session.commit()
    
#     return 'Image has been uploaded', 200
# # if __name__ == "__main__":
# #     app.run(debug=True)