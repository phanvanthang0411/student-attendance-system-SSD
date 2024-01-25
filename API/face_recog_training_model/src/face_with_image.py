import tensorflow.compat.v1 as tf
from urllib import request
import facenet
import align.detect_face
import numpy as np
import cv2
import pickle
import json


def main():
    # Đường dẫn đến ảnh từ URL
    image_url = 'Dataset/FaceData/dataTest/test.jpg'

    MINSIZE = 20
    THRESHOLD = [0.6, 0.7, 0.7]
    FACTOR = 0.709
    INPUT_IMAGE_SIZE = 160
    CLASSIFIER_PATH = 'Models/facemodel.pkl'
    FACENET_MODEL_PATH = 'Models/20180402-114759.pb'

    # Load the Custom Classifier
    with open(CLASSIFIER_PATH, 'rb') as file:
        model, class_names = pickle.load(file)
    print("Custom Classifier, Successfully loaded")

    with tf.Graph().as_default(), tf.Session() as sess:
        # Load the face recognition model
        facenet.load_model(FACENET_MODEL_PATH)

        images_placeholder = tf.get_default_graph().get_tensor_by_name("input:0")
        embeddings = tf.get_default_graph().get_tensor_by_name("embeddings:0")
        phase_train_placeholder = tf.get_default_graph().get_tensor_by_name("phase_train:0")
        embedding_size = embeddings.get_shape()[1]
        pnet, rnet, onet = align.detect_face.create_mtcnn(sess, "src/align")

        img = cv2.imread(image_url)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        # Detect faces
        bounding_boxes, _ = align.detect_face.detect_face(
            img, MINSIZE, pnet, rnet, onet, THRESHOLD, FACTOR)

        # Check if faces are detected
        if bounding_boxes is None or len(bounding_boxes) == 0:
            print("No faces detected.")
            return

        # List to store face information
        face_list = []

        for det in bounding_boxes:
            if (det[3] - det[1]) / img.shape[0] > 0.25:
                cropped = img[int(det[1]):int(det[3]),
                              int(det[0]):int(det[2]), :]
                scaled = cv2.resize(cropped, (INPUT_IMAGE_SIZE, INPUT_IMAGE_SIZE),
                                    interpolation=cv2.INTER_CUBIC)
                scaled = facenet.prewhiten(scaled)
                scaled_reshape = scaled.reshape(-1,
                                                INPUT_IMAGE_SIZE, INPUT_IMAGE_SIZE, 3)
                feed_dict = {images_placeholder: scaled_reshape,
                             phase_train_placeholder: False}
                emb_array = sess.run(embeddings, feed_dict=feed_dict)

                predictions = model.predict_proba(emb_array)
                best_class_index = np.argmax(predictions)
                best_class_probability = predictions[0, best_class_index]
                best_name = class_names[best_class_index]

                face_info = {
                    "name": best_name if best_class_probability > threshold_for_unknown else "Unknown",
                    # Convert to Python float for JSON serialization
                    "probability": float(best_class_probability),
                    "bounding_box": {
                        "top": float(det[1]),
                        "bottom": float(det[3]),
                        "left": float(det[0]),
                        "right": float(det[2])
                    }
                }
                face_list.append(face_info)

        # Convert face_list to JSON
        face_list_json = json.dumps(face_list, indent=2)
        print("Face List JSON:")
        print(face_list_json)


if __name__ == "__main__":
    threshold_for_unknown = 0.8  # Adjust this threshold as needed
    main()
