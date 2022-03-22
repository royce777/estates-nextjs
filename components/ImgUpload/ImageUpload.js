import { useState } from "react";
import { storage } from "../../firebase";
import { Input, Button } from "@chakra-ui/react";

function ImageUpload() {
  const [images, setImages] = useState(null);
  const [urls, setUrls] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      if (newImage) {
        setImages((images) => [...images, newImage]);
      }
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${images.name}`).put(images);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(images.name)
          .getDownloadURL()
          .then((url) => {
            setUrls(url);
          });
      }
    );
  };
  return (
    <div>
      <br />
      <Input multiple type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
      <br />
      {urls}
    </div>
  );
}

export default ImageUpload;
