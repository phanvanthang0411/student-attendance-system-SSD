from .extensions import db
from sqlalchemy import Date, Time, Boolean


class User(db.Model):
    userId = db.Column(db.Integer, primary_key=True)
    userName = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    role = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False, unique=True)
    identifyImage = db.Column(db.String(100), nullable=False, unique=True)


class ExamClass(db.Model):
    examClassId = db.Column(db.Integer, primary_key=True)
    examClassName = db.Column(db.String(100), nullable=False)
    room = db.Column(db.String(100), nullable=False)
    date = db.Column(db.String(100), nullable=False)
    startTime = db.Column(db.String(100), nullable=False)
    endTime = db.Column(db.String(100), nullable=False)
    duration = db.Column(db.String(100))
    attendanceStatus = db.Column(db.String(100))
    attendanceImage = db.Column(db.String(10000))
    

class Image(db.Model):
    Id = db.Column(db.Integer, primary_key=True)
    FileName = db.Column(db.String(100), nullable=False)
    FileType = db.Column(db.String(100), nullable=False)
    Base64_Image = db.Column(db.String(10000), nullable=False)
