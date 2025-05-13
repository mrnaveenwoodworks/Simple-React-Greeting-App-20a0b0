import React from "react";

const Greeting = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    },
    greeting: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#4B5563",
      marginBottom: "10px"
    },
    message: {
      fontSize: "1.2rem",
      color: "#6B7280"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.greeting}>Hello there!</h1>
      <p style={styles.message}>Welcome to our simple React greeting app.</p>
    </div>
  );
};

export default Greeting;