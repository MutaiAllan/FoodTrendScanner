from flask import request, jsonify
import logging
import time
from datetime import datetime
from models.user import Users
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    create_access_token,
    jwt_required,
    get_jwt_identity,
)
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer, BadSignature, SignatureExpired

def user_auth(app, db):

    serializer = URLSafeTimedSerializer('SECRET_KEY')

    @app.route("/api/v1/auth/register", methods=["POST"])
    def register():
        try:
            data = request.get_json()
            expected_fields = ["username", "password",
                            "phone", "first_name", "second_name", "email"]

            # Check if required fields are missing
            missing_fields = [field for field in expected_fields if field not in data]
            if missing_fields:
                return jsonify({"message": f"Missing required fields: {', '.join(missing_fields)}"}), 400

            username = data.get("username")
            password = generate_password_hash(data["password"])  # hash the password
            email = data.get("email")
            phone = data.get("phone")
            first_name = data.get("first_name")
            second_name = data.get("second_name")
            existing_email = Users.query.filter(Users.email==email).first()
            existing_phone = Users.query.filter(Users.phone==phone).first()
            existing_username = Users.query.filter(Users.username==username).first()
            
            if existing_email:
                return jsonify({"message": "Email already exists!"})
            if existing_phone:
                return jsonify({"message": "Phone number already exists!"})
            if existing_username:
                return jsonify({"message": "Username already exists!"})

            verification_token = serializer.dumps(email)
            verification_link = f"{request.host_url}api/v1/auth/verify/{verification_token}"

            # Initialize mail
            # mail = Mail(app)

            # msg = Message("Verification code.", sender='foodtrendsemail', # Change the email
            #             recipients=[data.get('email')])

            # html_body = """
            # <!DOCTYPE html>
            # <html lang="en">

            # <head>
            # <title></title>
            # <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            # <meta name="viewport" content="width=device-width, initial-scale=1">
            # <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            # </head>
            # <body>
            # </body>

            # </html>
            # """
            # # html_content = html_body.replace("{code_placeholder}", str(code))
            # # msg.html = html_content
            # msg.body = f"Hello {data.get('username')}! You've registered for FoodTrends. Here is your verification link: {verification_link}"
            # mail.send(msg)

            user = Users(username=username, password=password, email=email, phone=phone,
                        first_name=first_name, second_name=second_name)
            db.session.add(user)
            db.session.commit()

            db.session.commit()

            return jsonify({"message": verification_token}), 201

        except Exception as e:
            logging.error(f"Error processing prompt user request: {e}")
            return jsonify({"message": f"An error occurred: {e}"}), 500
        
    def get_user_data(user):
        return {
            "username": user.username,
            "email": user.email,
            "phone": user.phone,
            "first_name": user.first_name,
            "second_name": user.second_name
        }

    @app.route("/api/v1/auth/login", methods=["POST"])
    def login():
        try:
            data = request.get_json()
            email_or_phone = data["email_or_phone"]
            password = data["password"]
            if ["email_or_phone", "password"] is None:
                return jsonify({"message": "All fields are required"}), 400
            if "@" in email_or_phone:
                user = Users.query.filter_by(email=email_or_phone).first()
                if user and check_password_hash(user.password, password):
                    # Create the access token
                    access_token = create_access_token(
                        identity=user.id, additional_claims={"role": user.username})

                    # Return the token in the response
                    return jsonify({"message": "Login successful", "access_token": access_token, "user_data": get_user_data(user)}), 200
                else:
                    return jsonify({"message": "Invalid username or password"}), 400
            else:                
                user = Users.query.filter_by(phone=email_or_phone).first()
                if user and check_password_hash(user.password, password):
                    # Create the access token
                    access_token = create_access_token(
                        identity=user.id, additional_claims={"role": user.username})

                    # Return the token in the response
                    return jsonify({"message": "Login successful", "access_token": access_token, "user_data": get_user_data(user)}), 200
                else:
                    return jsonify({"message": "Invalid username or password"}), 400
        except Exception as e:
            logging.error(f"Error processing prompt user request: {e}")
            return jsonify({"message": "An error occurred"}), 500

    @app.route("/api/v1/auth/validate-token", methods=["POST"])
    @jwt_required()  # Ensure a valid token is present
    def validate_token():
        try:
            current_user = get_jwt_identity()  # Get user ID from decoded token
            user = Users.query.get(current_user)  # Retrieve user details
            if user:
                return jsonify({"message": "Token is valid", "user_data": get_user_data(user)}), 200
            else:
                return jsonify({"message": "Invalid token"}), 400
        except Exception as e:
            logging.error(f"Error validating token: {e}")
            return jsonify({"message": "An error occurred"}), 500
        

    @app.route("/api/v1/auth/verify/<token>", methods=["GET"])
    def verify_email(token):
        try:
            email = serializer.loads(token, max_age=3600)
            user = Users.query.filter_by(email=email).first()
            if user:
                # Mark the user as verified in the database
                user.email_verified = True
                db.session.commit()
                return jsonify({"message": "Email verified successfully."}), 200
            else:
                return jsonify({"message": "Invalid token."}), 400
        except SignatureExpired:
            return jsonify({"message": "Token has expired."}), 400
        except BadSignature:
            return jsonify({"message": "Invalid token."}), 400
        except Exception as e:
            logging.error(f"Error verifying email: {e}")
            return jsonify({"message": "An error occurred"}), 500