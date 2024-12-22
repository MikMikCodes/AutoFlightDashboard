import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}> <span role="img" aria-label="logo">🌱</span> AutoFlight Dashboard</h1>
      <div style={styles.menu}>
        <button style={styles.menuItem}>Home</button>
        <button style={styles.menuItem}>Visualize</button>
        <button style={styles.menuItem}>Settings</button>
      </div>
    </nav>
  );
};

const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem 2rem",
      backgroundColor: "#F3F1D6",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      borderBottom: "3px solid #7ED7C5",
    },
    logo: {
      fontSize: "1.8rem",
      fontFamily: "'Poppins', sans-serif",
      color: "#4C3C33",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    menu: {
      display: "flex",
      gap: "1rem",
      padding: "1.5rem 2rem",
    },
    menuItem: {
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
  

export default Navbar;
