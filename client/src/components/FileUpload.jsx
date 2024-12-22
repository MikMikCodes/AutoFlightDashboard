import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/api/flights/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed. Please try again.");
    }
  };

  return (
    <div style={styles.uploadContainer}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={styles.fileInput}
      />
      <button onClick={handleUpload} style={styles.uploadButton}>
        <FaCloudUploadAlt style={{ marginRight: "0.5rem" }} />
        Upload
      </button>
    </div>
  );
};

const styles = {
  uploadContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem", 
    margin: "20px",
  },
  fileInput: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "1rem",
    padding: "0.4rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  uploadButton: {
    backgroundColor: "#7ED7C5",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    padding: "0.5rem 1rem",
    fontFamily: "'Lato', sans-serif",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default FileUpload;
