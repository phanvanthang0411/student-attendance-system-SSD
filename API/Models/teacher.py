# from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
# from datetime import datetime

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///teachers.db'
# db = SQLAlchemy(app)
# # Model Student
# class Student(db.Model):
#     Id = db.Column(db.Integer, primary_key=True)
#     FullName = db.Column(db.String(100) )
#     StudentCode = db.Column(db.Integer)
#     Gender = db.Column(db.String(100))
#     PhoneNumber = db.Column(db.String(100))
#     Email = db.Column(db.String(100), unique = True)
#     UserName = db.Column(db.String(100))
#     PassWordHash = db.Column(db.String(100))

# # Route to get list student information
# @app.route('/get_listtstudents', methods=['GET'])
# def get_students():
#     students = Student.query.all()
#     student_list = []

#     for student in students:
#         student_info = {
#             'id': student.id,
#             'name': student.name,
#             'gender': student.Gender,
#             'email': student.Email
#         }
#         student_list.append(student_info)

#     return jsonify({'students': student_list})
# # Route to get student information
# @app.route('/get_student/<int:student_id>', methods=['GET'])
# def get_student(student_id):
#     student = Student.query.get(student_id)
#     if student:
#         return jsonify({'id': student.Id, 'name': student.Name, 'studentcode': student.StudentCode, 'gender': student.Gender, 'phonenumber': student.PhoneNumber, 'email': student.Email,})
#     else:
#         return jsonify({'error': 'Students do not exist!'}), 404

# # Route to add new student
# @app.route('/add_student', methods=['POST'])
# def add_student():
#     data = request.get_json()

#     new_student = Student(Name=data['name'], StudentCode=data['studentcode'], Gender=data['gender'], PhoneNumber=data['phonenumber'], Email=data['email'], UserName=data['username'], PassWordHash =data['password'])
#     db.session.add(new_student)
#     db.session.commit()

#     return jsonify({'message': 'Adding Successfully!'}), 201

# # Route to update student information
# @app.route('/update_student/<int:student_id>', methods=['PUT'])
# def update_student(student_id):
#     student = Student.query.get(student_id)
#     if student:
#         data = request.get_json()

#         student.Name = data['name']
#         student.Studentcode = data['studentcode']
#         student.Gender = data['gender']
#         student.PhoneNumber=data['phonenumber']
#         student.Email=data['email']
#         student.UserName = data['username']
#         student.PassWordHash = data['password']
#         db.session.commit()

#         return jsonify({'message': 'Updating successfully!'})
#     else:
#         return jsonify({'error': 'Students do not exist!'}), 404

# # Route to delete students
# @app.route('/delete_student/<int:student_id>', methods=['DELETE'])
# def delete_student(student_id):
#     student = Student.query.get(student_id)
#     if student:
#         db.session.delete(student)
#         db.session.commit()
#         return jsonify({'message': 'Delete successfully!'})
#     else:
#         return jsonify({'error': 'Students do not exist!'}), 404

# # Start backend
# if __name__ == '__main__':
#     with app.app_context():
#         db.create_all()
#     app.run(debug=True)
