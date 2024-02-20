from flask import Flask
from .extensions import api, db
from .userController import user_ns
from .examClassController import examclass_ns
from .imageController import image_ns
from flask_migrate import Migrate
from flask_cors import CORS


def create_app():
    app = Flask(__name__)

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite3"

    migrate = Migrate(app, db)

    api.init_app(app)
    db.init_app(app)

    api.add_namespace(user_ns)
    api.add_namespace(examclass_ns)
    api.add_namespace(image_ns)
    CORS(app, supports_credentials=True)
    return app
