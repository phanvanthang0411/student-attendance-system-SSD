from flask import Flask
from .extensions import api, db
from .studentController import student_ns
from .teacherController import teacher_ns
from .imageController import image_ns
from flask_migrate import Migrate


def create_app():
    app = Flask(__name__)

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite3"

    migrate = Migrate(app, db)
    
    api.init_app(app)
    db.init_app(app)

    api.add_namespace(student_ns)
    api.add_namespace(teacher_ns)
    api.add_namespace(image_ns)

    return app
