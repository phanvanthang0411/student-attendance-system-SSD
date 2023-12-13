# image_logic.py

from flask import jsonify
from .models import Image
from .extensions import db
# from .api_models import image_input_model, image_model

def process_image_payload(file):
    """
    Process the uploaded image file and return the Image object.
    """
    try:
        image = Image(
            FileName=file.filename,
            FileType=file.content_type,
            Base64_Image=file.read().decode('utf-8'),
        )
        db.session.add(image)
        db.session.commit()

        # Gọi mô hình AI và xử lý kết quả ảnh tại đây
        # result = call_ai_model(image.Base64_Image)

        # Trả về cả ảnh và kết quả từ mô hình AI
        return image
    except Exception as e:
        return jsonify({'error': str(e)}), 500
