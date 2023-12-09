# Step One

Install những thư viện cần thiết

```
pip install -r requirements.txt
```

# Step Two

Detect khuôn mặt dựa trên Dataset

```
cd face_recog_training_model

python src/align_dataset_mtcnn.py  Dataset/FaceData/raw Dataset/FaceData/processed --image_size 160 --margin 32  --random_order --gpu_memory_fraction 0.25
```

# Step Two

Train model AI

```
python src/classifier.py TRAIN Dataset/FaceData/processed Models/20180402-114759.pb Models/facemodel.pkl --batch_size 1000
```

# Step Three

Chạy real-time webcam

```
python src/face_rec_cam.py
```
