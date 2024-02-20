from flask_restx import Resource, Namespace
from flask import Flask, request, jsonify
from .models import User
from .extensions import db
from .api_models import user_model, user_input_model

user_ns = Namespace('User', description='User operations')


@user_ns.route("/users")
class UserListAPI(Resource):
    @user_ns.marshal_list_with(user_model)
    def get(self):
        return User.query.all()

    @user_ns.expect(user_input_model)
    @user_ns.marshal_list_with(user_model)
    def post(self):
        print(user_ns.payload)
        user = User(userName=user_ns.payload['userName'],
                          email=user_ns.payload['email'],
                          password=user_ns.payload['password'],
                          role=user_ns.payload['role'],
                          identifyImage=user_ns.payload['identifyImage'],)
        db.session.add(user)
        db.session.commit()
        return user, 201


@user_ns.route("/user/<int:user_id>")
class UserAPI(Resource):
    @user_ns.marshal_list_with(user_model)
    def get(self, user_id):
        user = User.query.get(user_id)
        if user:
            return user
        else:
            return jsonify({'error': 'User do not exist!'}), 404

    @user_ns.expect(user_input_model)
    @user_ns.marshal_list_with(user_model)
    def put(self, user_id):
        user = User.query.get(user_id)
        if user:
            user = User(userName=user_ns.payload['userName'],
                          email=user_ns.payload['email'],
                          password=user_ns.payload['password'],
                          role=user_ns.payload['role'],
                          identifyImage=user_ns.payload['identifyImage'],)
            db.session.commit()
            return user
        else:
            return jsonify({'error': 'user do not exist!'}), 404

    def delete(self, user_id):
        user = User.query.get(user_id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return jsonify({'message': 'Delete successfully!'})
        else:
            return jsonify({'error': 'User do not exist!'}), 404
