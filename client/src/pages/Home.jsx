import React from "react";
import FileUpload from "../components/FileUpload";

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome to the Autonomous Flight Dashboard</h2>
        <p style={styles.description}>
          Upload your flight data and visualize your routes in a cozy, colorful environment. 🛫✨
        </p>
        <FileUpload />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    paddingTop: "2rem",
    backgroundColor: "#F3F1D6",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    textAlign: "center",
    width: "80%",
    maxWidth: "600px",
  },
  heading: {
    fontSize: "2rem",
    color: "#4C3C33",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1rem",
    color: "#7ED7C5",
    marginBottom: "1.5rem",
  },
};

export default Home;
