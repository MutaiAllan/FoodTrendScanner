import os
from datetime import timedelta
import configparser

# Loading the .env file
# load_dotenv()
config = configparser.ConfigParser()
# config.read("config.ini")

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///data_base.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    # SECRET_KEY = os.environ['SECRET_KEY']

    SESSION_TYPE = 'redis'
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    # Additional JWT Configurations
    JWT_SECRET_KEY = os.urandom(32).hex()
    JWT_BLACKLIST_ENABLED = True
    JWT_BLACKLIST_TOKEN_CHECKS = ['access']
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=48)


    # Email config
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 465
    MAIL_USERNAME = ''
    MAIL_PASSWORD = ""
    MAIL_USE_TLS = False
    MAIL_USE_SSL = True

    UPLOAD_FOLDER='uploads'