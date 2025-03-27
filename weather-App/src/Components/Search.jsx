import { useState } from "react";

const Search = (props) => {
  const [city, setCity] = useState("");

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  };

  const inputStyle = {
    width: "100%",
    maxWidth: "300px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #2196F3",
    fontSize: "16px",
    fontFamily: "'Roboto', sans-serif",
    color: "#333",
    outline: "none",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
  };

  const buttonStyle = {
    padding: "12px 20px",
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
      <input
        onChange={(e) => {
          setCity(e.target.value);
        }}
        style={inputStyle}
        placeholder="Enter the city"
      />
      <button
        onClick={() => {
          if (city.trim() == "") {
          alert("Please enter a city name.");
          return;
        }
        props.oncitysubmit(city);
  }}
  style={buttonStyle}
>
  Get Weather
</button>
    </div>
  );
};

export default Search;