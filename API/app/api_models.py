from flask_restx import fields

from .extensions import api

user_model = api.model("User", {
    'userId': fields.Integer,
    'userName': fields.String,
    'email': fields.String,
    'role': fields.String,
    'password': fields.String,
    'identifyImage': fields.String
})

examclass_model = api.model("ExamClass", {
    'examClassId': fields.Integer,
    'examClassName': fields.String,
    'room': fields.String,
    'date': fields.String,
    'startTime': fields.String,
    'endTime': fields.String,
    'duration': fields.String,
    'attendanceStatus': fields.String,
    'attendanceImage': fields.String,
})

image_model = api.model("Image", {
    'FileName': fields.String,
    'FileType': fields.String,
    'Base64_Image': fields.String
})


user_input_model = api.model("UserInput", {
    'userName': fields.String,
    'email': fields.String,
    'role': fields.String,
    'password': fields.String,
    'identifyImage': fields.String
})

examclass_input_model = api.model("ExamClassInput", {
    'examClassName': fields.String,
    'room': fields.String,
    'date': fields.String,
    'startTime': fields.String,
    'endTime': fields.String,
    'duration': fields.String,
    'attendanceStatus': fields.String,
    'attendanceImage': fields.String,
})
image_input_model = api.model("ImageInput", {
    'FileName': fields.String,
    'FileType': fields.String,
    'Base64_Image': fields.String
})

upload_file_model = api.model("FileInput", {
    'file': fields.Raw(
        required=True,
        description='Image file',
        type='file',
        format='binary',
        example='Choose file...'
    )
})
