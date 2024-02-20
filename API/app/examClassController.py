from flask_restx import Resource, Namespace
from flask import Flask, request, jsonify
from .models import ExamClass
from .extensions import db
from .api_models import examclass_input_model, examclass_model

examclass_ns = Namespace('ExamClass', description='Exam Class operations')


@examclass_ns.route("/examclass")
class ExamClassListAPI(Resource):
    @examclass_ns.marshal_list_with(examclass_model)
    def get(self):
        return ExamClass.query.all()

    @examclass_ns.expect(examclass_input_model)
    @examclass_ns.marshal_list_with(examclass_model)
    def post(self):
        print(examclass_ns.payload)
        examClass = ExamClass(examClassName=examclass_ns.payload['examClassName'],
                              room=examclass_ns.payload['room'],
                              date=examclass_ns.payload['date'],
                              startTime=examclass_ns.payload['startTime'],
                              endTime=examclass_ns.payload['endTime'],
                              duration=examclass_ns.payload['duration'],
                              attendanceStatus=examclass_ns.payload['attendanceStatus'],
                              attendanceImage=examclass_ns.payload['attendanceImage'],)
        db.session.add(examClass)
        db.session.commit()
        return examClass, 201


@examclass_ns.route("/examClass/<int:class_id>")
class ExamClassAPI(Resource):
    @examclass_ns.marshal_list_with(examclass_model)
    def get(self, class_id):
        examClass = ExamClass.query.get(class_id)
        if examClass:
            return examClass, 201
        else:
            return jsonify({'error': 'Class do not exist!'}), 404

    @examclass_ns.expect(examclass_input_model)
    @examclass_ns.marshal_list_with(examclass_model)
    def put(self, class_id):
        examClass = ExamClass.query.get(class_id)
        if examClass:
            examClass = ExamClass(examClassName=examclass_ns.payload['examClassName'],
                                  room=examclass_ns.payload['room'],
                                  date=examclass_ns.payload['date'],
                                  startTime=examclass_ns.payload['startTime'],
                                  endTime=examclass_ns.payload['endTime'],
                                  duration=examclass_ns.payload['duration'],
                                  attendanceStatus=examclass_ns.payload['attendanceStatus'],
                                  attendanceImage=examclass_ns.payload['attendanceImage'],)
            db.session.commit()
            return examClass, 201
        else:
            return jsonify({'error': 'Class do not exist!'}), 404

    def delete(self, class_id):
        examClass = ExamClass.query.get(class_id)
        if examClass:
            db.session.delete(examClass)
            db.session.commit()
            return jsonify({'message': 'Delete successfully!'})
        else:
            return jsonify({'error': 'Class do not exist!'}), 404
