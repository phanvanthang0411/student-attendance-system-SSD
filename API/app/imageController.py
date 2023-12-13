from flask_restx import Resource, Namespace
from flask import request
from .imageLogic import process_image_payload
from .api_models import image_input_model, image_model, upload_file_model
from .models import Image
from .extensions import db

image_ns = Namespace('Image', description='Image operations')


@image_ns.route("/upload")
class ImageAPI(Resource):
    @image_ns.expect(upload_file_model)
    @image_ns.marshal_list_with(image_model)
    def post(self):
        try:
            if 'file' in request.files:
                # Xử lý upload file ảnh nếu có
                uploaded_file = request.files['file']
                return process_image_payload(uploaded_file)

            return {'error': 'No file uploaded'}, 400
        except Exception as e:
            return {'error': str(e)}, 500
