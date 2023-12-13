from .extensions import db


class Student(db.Model):
    Id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(100), nullable=False)
    FullName = db.Column(db.String(100))
    StudentCode = db.Column(db.Integer)
    Gender = db.Column(db.String(100))
    PhoneNumber = db.Column(db.String(100))
    Email = db.Column(db.String(100), unique=True)
    UserName = db.Column(db.String(100))
    PassWordHash = db.Column(db.String(100))
    Avatar = db.Column(db.String(10000), nullable=False)


class Teacher(db.Model):
    Id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(100), nullable=False)
    FullName = db.Column(db.String(100))
    Gender = db.Column(db.String(100))
    PhoneNumber = db.Column(db.String(100))
    Email = db.Column(db.String(100), unique=True)
    UserName = db.Column(db.String(100))
    PassWordHash = db.Column(db.String(100))
    Avatar = db.Column(db.String(10000), nullable=False)


class Image(db.Model):
    Id = db.Column(db.Integer, primary_key=True)
    FileName = db.Column(db.String(100), nullable=False)
    FileType = db.Column(db.String(100), nullable=False)
    Base64_Image = db.Column(db.String(10000), nullable=False)
