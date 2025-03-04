// ✅ Project 1: Live Stock Ticker (Real-time stock price updates)
// 🔹 Concepts Covered: JSX, Components, Props, useState
// 📝 Checklist:
// 🔲 Set up a React component named StockTicker.js


// 🔲 Use useState to store a stock price (const [price, setPrice] = useState(100))
// 🔲 Render JSX to display the stock price dynamically
// 🔲 Create a button to simulate stock price updates
// 🔲 Use an event handler (onClick) to update the price randomly
// 🔲 Pass stock price as a prop to a StockCard child component
// 🔲 Use conditional rendering to show "📈 Up" or "📉 Down" based on price change


import { useState } from "react";

function StockTicker() {
  const [price, setPrice] = useState(100);
  const [previousPrice, setPreviousPrice] = useState(null);

  function stockPrice() {
    setPreviousPrice(price);
    setPrice(Math.random() * 100);
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", marginTop: "20px" }}>
      <StockCard price={price} previousPrice={previousPrice} />
      <p style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
        Current Price: <span style={{ color: "#007bff" }}>{price.toFixed(2)}</span>
      </p>
      <button
        onClick={stockPrice}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Click Here
      </button>
    </div>
  );
}

function StockCard({ price, previousPrice }) {
  if (previousPrice === null) {
    return <p style={{ fontSize: "20px", fontWeight: "bold", color: "#6c757d" }}>📊 No previous data</p>;
  }

  return (
    <p
      style={{
        fontSize: "20px",
        fontWeight: "bold",
        color: previousPrice > price ? "red" : "green",
      }}
    >
      {previousPrice > price ? "📉 Down" : "📈 Up"}
    </p>
  );
}

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <StockTicker />
    </div>
  );
}

export default App;


