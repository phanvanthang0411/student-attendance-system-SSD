from .extensions import db

class Student(db.Model):
    Id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(100), nullable= False)
    FullName = db.Column(db.String(100))
    StudentCode = db.Column(db.Integer)
    Gender = db.Column(db.String(100))
    PhoneNumber = db.Column(db.String(100))
    Email = db.Column(db.String(100), unique = True)
    UserName = db.Column(db.String(100))
    PassWordHash = db.Column(db.String(100))    
    
class Teacher(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(100), nullable= False)
    FullName = db.Column(db.String(100))
    Gender = db.Column(db.String(100))
    PhoneNumber = db.Column(db.String(100))
    Email = db.Column(db.String(100), unique = True)
    UserName = db.Column(db.String(100))
    PassWordHash = db.Column(db.String(100)) 
    
    