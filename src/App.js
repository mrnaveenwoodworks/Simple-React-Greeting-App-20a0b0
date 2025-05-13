import React from "react";
import Greeting from "./components/Greeting";

function App() {
  const styles = {
    appContainer: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F3F4F6"
    }
  };

  return (
    <div style={styles.appContainer}>
      <Greeting />
    </div>
  );
}

export default App;