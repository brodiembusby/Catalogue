# OBsolete went with Java


# from flask import Flask,jsonify, request

# app = Flask(__name__)
# '''
# HTTP Methods
# -------------
# GET - retrieve
# POST - create
# PUT - alter data
# DELETE - remove data
# '''
# # use this path parameter "/get-user/user_id"
# @app.route("/get-user/<user_id>")
# def get_user(user_id):
#     # TODO user_data will probably placed somewhere else mock data
    
#     user_data = {
#     "user_id": user_id,
#     "name": "TestName",
#     "email": "testEmail@example.com"
#     }
    
#     #query parameter "get-user/123?extrahello world"
    
#     extra = request.args.get("extra")
#     if extra:
#         user_data["extra"] = extra
        
#     # 200 is the status(HTTP) code    
#     return jsonify(user_data), 200

# @app.route("/create-user", methods=["POST"])

# def create_user():
#     # Add to database?
    
#     if request.method == "POST":
#         data = request.get_json()
    
#     return jsonify(data), 201


# # When testing this is what i had to look up http://localhost:5000/get-user/123?extra=hello
# # ? after this is extra
# if __name__ == "__main__":
#     app.run(debug=True)
 