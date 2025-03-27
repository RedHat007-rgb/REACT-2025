const Footer = () => {
  const styles = {
    footer: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      background: "#2196F3", 
      color: "#FFFFFF",
      textAlign: "center",
      padding: "10px 0",
      boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Roboto', sans-serif",
      fontSize: "14px",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.footer}>
      <h2>©☀️☁︎⚡️Forecast.com</h2>
    </div>
  );
};

export default Footer;