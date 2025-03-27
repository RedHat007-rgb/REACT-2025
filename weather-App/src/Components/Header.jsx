const Header = () => {
  const headerStyle = {
    background: "linear-gradient(135deg, #2196F3, #42A5F5)",
    color: "#FFFFFF",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px",
    marginBottom: "20px",
    fontFamily: "'Roboto', sans-serif",
  };

  const h1Style = {
    fontSize: "28px",
    fontWeight: "600",
    margin: "0",
  };

  const quoteStyle = {
    fontSize: "14px",
    fontStyle: "italic",
    marginTop: "10px",
    opacity: "0.9",
  };

  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>Weather App</h1>
      <p style={quoteStyle}>"The weather is a great metaphor for life - sometimes it's good, sometimes it's bad, and there's nothing much you can do about it but carry an umbrella."</p>
    </header>
  );
};

export default Header;