from .extensions import db


class Student(db.Model):
    Id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(100), nullable=False)
    FullName = db.Column(db.String(100), nullable=False)
    StudentCode = db.Column(db.Integer, unique=True)
    Gender = db.Column(db.String(100), nullable=False)
    PhoneNumber = db.Column(db.String(100))
    Email = db.Column(db.String(100), unique=True)
    UserName = db.Column(db.String(100), nullable=False, unique=True)
    PassWordHash = db.Column(db.String(100), nullable=False, unique=True)


class Teacher(db.Model):
    Id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(100), nullable=False)
    FullName = db.Column(db.String(100), nullable=False)
    Gender = db.Column(db.String(100), nullable=False)
    PhoneNumber = db.Column(db.String(100), nullable=False)
    Email = db.Column(db.String(100), unique=True)
    UserName = db.Column(db.String(100), nullable=False, unique=True)
    PassWordHash = db.Column(db.String(100), nullable=False, unique=True)


class Image(db.Model):
    Id = db.Column(db.Integer, primary_key=True)
    FileName = db.Column(db.String(100), nullable=False)
    FileType = db.Column(db.String(100), nullable=False)
    Base64_Image = db.Column(db.String(10000), nullable=False)
