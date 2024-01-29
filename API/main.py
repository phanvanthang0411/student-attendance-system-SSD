import os
from flask import Flask

os.environ["FLASK_APP"] = "app.py"  # Đặt giá trị của FLASK_APP
os.system("flask run")