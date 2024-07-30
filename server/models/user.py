from models.dbconfig import db
from datetime import datetime


class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(64), unique=False)
    second_name = db.Column(db.String(64), unique=False)
    username = db.Column(db.String(64), unique=True)
    password = db.Column(db.String())
    email = db.Column(db.String(64), unique=True, nullable=True)
    phone = db.Column(db.String(64), unique=True)