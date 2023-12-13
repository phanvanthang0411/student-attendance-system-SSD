from flask_restx import Resource, Namespace
from flask import Flask, request, jsonify
from .models import Teacher
from .extensions import db
from .api_models import teacher_model, teacher_input_model

teacher_ns = Namespace('Teacher', description='Teacher operations')


@teacher_ns.route("/teacher")
class TeacherListAPI(Resource):
    @teacher_ns.marshal_list_with(teacher_model)
    def get(self):
        return Teacher.query.all()

    @teacher_ns.expect(teacher_input_model)
    @teacher_ns.marshal_list_with(teacher_model)
    def post(self):
        print(teacher_ns.payload)
        teacher = Teacher(Name=teacher_ns.payload['Name'],
                          FullName=teacher_ns.payload['FullName'],
                          Gender=teacher_ns.payload['Gender'],
                          Email=teacher_ns.payload['Email'],
                          PhoneNumber=teacher_ns.payload['PhoneNumber'],
                          UserName=teacher_ns.payload['UserName'],
                          PassWordHash=teacher_ns.payload['PassWordHash'],)
        db.session.add(teacher)
        db.session.commit()
        return teacher, 201


@teacher_ns.route("/teacher/<int:teacher_id>")
class TeacherAPI(Resource):
    @teacher_ns.marshal_list_with(teacher_model)
    def get(self, teacher_id):
        teacher = Teacher.query.get(teacher_id)
        if teacher:
            return teacher, 201
        else:
            return jsonify({'error': 'Teacher do not exist!'}), 404

    @teacher_ns.expect(teacher_input_model)
    @teacher_ns.marshal_list_with(teacher_model)
    def put(self, teacher_id):
        teacher = Teacher.query.get(teacher_id)
        if teacher:
            teacher = Teacher(Name=teacher_ns.payload['Name'],
                              FullName=teacher_ns.payload['FullName'],
                              Gender=teacher_ns.payload['Gender'],
                              Email=teacher_ns.payload['Email'],
                              PhoneNumber=teacher_ns.payload['PhoneNumber'],
                              UserName=teacher_ns.payload['UserName'],
                              PassWordHash=teacher_ns.payload['PassWordHash'],)
            db.session.commit()
            return teacher, 201
        else:
            return jsonify({'error': 'Teacher do not exist!'}), 404

    def delete(self, teacher_id):
        teacher = Teacher.query.get(teacher_id)
        if teacher:
            db.session.delete(teacher)
            db.session.commit()
            return jsonify({'message': 'Delete successfully!'})
        else:
            return jsonify({'error': 'Teacher do not exist!'}), 404
