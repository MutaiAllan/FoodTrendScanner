from user_auth import user_auth
from fileupload import fileupload

def register_routes(app, db):

    @app.route("/", methods=["GET"])
    def welcome():
        return "Welcome to FoodTrends API."
    
    user_auth(app, db)
    fileupload(app, db)