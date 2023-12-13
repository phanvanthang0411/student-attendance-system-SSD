from flask_restx import Resource, Namespace
from flask import Flask, request, jsonify
from .models import Student, Teacher
from .extensions import db
from .api_models import student_model, teacher_model, student_input_model, teacher_input_model

student_ns = Namespace('Student', description='Student operations')


@student_ns.route("/student")
class StudentListAPI(Resource):
    @student_ns.marshal_list_with(student_model)
    def get(self):
        return Student.query.all()

    @student_ns.expect(student_input_model)
    @student_ns.marshal_list_with(student_model)
    def post(self):
        print(student_ns.payload)
        student = Student(Name=student_ns.payload['Name'],
                          FullName=student_ns.payload['FullName'],
                          StudentCode=student_ns.payload['StudentCode'],
                          Gender=student_ns.payload['Gender'],
                          Email=student_ns.payload['Email'],
                          PhoneNumber=student_ns.payload['PhoneNumber'],
                          UserName=student_ns.payload['UserName'],
                          PassWordHash=student_ns.payload['PassWordHash'],)
        db.session.add(student)
        db.session.commit()
        return student, 201


@student_ns.route("/student/<int:student_id>")
class StudentAPI(Resource):
    @student_ns.marshal_list_with(student_model)
    def get(self, student_id):
        student = Student.query.get(student_id)
        if student:
            return student
        else:
            return jsonify({'error': 'Students do not exist!'}), 404

    @student_ns.expect(student_input_model)
    @student_ns.marshal_list_with(student_model)
    def put(self, student_id):
        student = Student.query.get(student_id)
        if student:
            student = Student(Name=student_ns.payload['Name'],
                              FullName=student_ns.payload['FullName'],
                              StudentCode=student_ns.payload['StudentCode'],
                              Gender=student_ns.payload['Gender'],
                              Email=student_ns.payload['Email'],
                              PhoneNumber=student_ns.payload['PhoneNumber'],
                              UserName=student_ns.payload['UserName'],
                              PassWordHash=student_ns.payload['PassWordHash'],)
            db.session.commit()
            return student
        else:
            return jsonify({'error': 'Students do not exist!'}), 404

    def delete(self, student_id):
        student = Student.query.get(student_id)
        if student:
            db.session.delete(student)
            db.session.commit()
            return jsonify({'message': 'Delete successfully!'})
        else:
            return jsonify({'error': 'Student do not exist!'}), 404
