from flask_restx import fields

from .extensions import api

student_model = api.model("Student", {
    'Id': fields.Integer,
    'Name': fields.String,
    'FullName': fields.String,
    'StudentCode': fields.Integer,
    'Gender': fields.String,
    'PhoneNumber': fields.String,
    'Email': fields.String,
    'UserName': fields.String,
    'PassWordHash': fields.String
})

teacher_model = api.model("Teacher", {
    'Id': fields.Integer,
    'Name': fields.String,
    'FullName': fields.String,
    'Gender': fields.String,
    'PhoneNumber': fields.String,
    'Email': fields.String,
    'UserName': fields.String,
    'PassWordHash': fields.String
})

image_model = api.model("Image", {
    'FileName': fields.String,
    'FileType': fields.String,
    'Base64_Image': fields.String
})


student_input_model = api.model("StudentInput", {
    'Name': fields.String,
    'FullName': fields.String,
    'StudentCode': fields.Integer,
    'Gender': fields.String,
    'PhoneNumber': fields.String,
    'Email': fields.String,
    'UserName': fields.String,
    'PassWordHash': fields.String
})

teacher_input_model = api.model("TeacherInput", {
    'Name': fields.String,
    'FullName': fields.String,
    'Gender': fields.String,
    'PhoneNumber': fields.String,
    'Email': fields.String,
    'UserName': fields.String,
    'PassWordHash': fields.String
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
        validate=lambda x: x.mimetype.startswith('image/') or x.mimetype.startswith('video/') if x else False
    )
})