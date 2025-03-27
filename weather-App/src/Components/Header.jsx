const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>☀️ Weather Forecast</h1>
      <p style={styles.subtitle}>Get real-time weather updates for any city</p>
    </header>
  );
};

const styles = {
   header: {
    width: "100%",
    position: "fixed",  // Makes it stick to the top
    top: "0",
    left: "0",
    padding: "15px 0",
    textAlign: "center",
    background: "linear-gradient(90deg, #FF8C00, #FFD700)", // Bright orange to gold
    color: "white",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)", 
    zIndex: "1000", // Ensures it stays on top
  },
  title: {
    fontSize: "30px",
    margin: "0",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  subtitle: {
    fontSize: "16px",
    margin: "5px 0 0",
    fontWeight: "400",
  },
};

export default Header;

