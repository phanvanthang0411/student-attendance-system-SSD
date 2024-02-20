# Step One

Khởi tạo môi trường

```
python -m venv env
```

# Step Two

Install những thư viện cần thiết

```
cd API
pip install -r requirements.txt
```

Lệnh migration khi thay đổi database cập nhật vào database
```
flask db init
flask db migrate -m "Initial migration"
flask db upgrade