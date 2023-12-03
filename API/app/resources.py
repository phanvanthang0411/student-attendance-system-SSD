from flask_restx import Resource, Namespace
from .models import Student, Teacher

ns = Namespace('api')


@ns.route("/hello")
class Hello(Resource):
    def get(self):
        return {"hello": "restx"}


@ns.route("/student")
class StudentAPI(Resource):
    def get(self):
        return Student.query.all()
