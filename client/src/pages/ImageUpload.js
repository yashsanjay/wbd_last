import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('profileImage', selectedFile);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Image uploaded:', response.data.imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  return (
    <div >
      <input type="file" onChange={handleFileChange} style={{display:'inline'}}/>
      <button onClick={handleUpload} >Upload</button>
    </div>
  );
};

export default ImageUpload;
