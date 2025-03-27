const Display = (props) => {
  const containerStyle = {
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
  };

  const locationStyle = {
    marginBottom: "15px",
  };

  const cityNameStyle = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
  };

  const countryNameStyle = {
    fontSize: "14px",
    color: "#666",
  };

  const currentWeatherStyle = {
    marginBottom: "15px",
  };

  const tempStyle = {
    fontSize: "36px",
    fontWeight: "700",
    color: "#2196F3", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const tempUnitStyle = {
    fontSize: "16px",
    fontWeight: "normal",
    marginLeft: "5px",
    color: "#333",
  };

  const conditionStyle = {
    marginTop: "10px",
  };

  const conditionIconStyle = {
    width: "50px",
    height: "50px",
  };

  const conditionTextStyle = {
    fontSize: "16px",
    color: "#333",
    marginTop: "5px",
  };

  const detailsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "15px",
  };

  const detailTextStyle = {
    fontSize: "14px",
    color: "#666",
  };

  const detailValueStyle = {
    fontWeight: "600",
    color: "#2196F3",
  };

  const buttonStyle = {
    padding: "10px 20px",
    background: "#2196F3",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "500",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <div style={locationStyle}>
        <h2 style={cityNameStyle}>
          {props.response.location.name}, {props.response.location.region}
        </h2>
        <p style={countryNameStyle}>{props.response.location.country}</p>
      </div>
      <div style={currentWeatherStyle}>
        <div style={tempStyle}>
          <span>{props.response.current.temp_c}</span>
          <span style={tempUnitStyle}>°C</span>
        </div>
        <div style={conditionStyle}>
          <img
            src={props.response.current.condition.icon}
            alt={props.response.current.condition.text}
            style={conditionIconStyle}
          />
          <p style={conditionTextStyle}>{props.response.current.condition.text}</p>
        </div>
      </div>
      <div style={detailsStyle}>
        <p style={detailTextStyle}>
          Feels like: <span style={detailValueStyle}>{props.response.current.feelslike_c}°C</span>
        </p>
        <p style={detailTextStyle}>
          Wind: <span style={detailValueStyle}>{props.response.current.wind_kph} kph</span>
        </p>
      </div>
      <button onClick={props.handleBackClick} style={buttonStyle}>
        Back
      </button>
    </div>
  );
};

export default Display;