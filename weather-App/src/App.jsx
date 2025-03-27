import Header from "./Components/Header";
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import Display from "./Components/Display";
import { useState } from "react";

function App() {
  const [object, setObject] = useState([]);
  const [display, setDisplay] = useState(false);
  const key = import.meta.env.VITE_API_KEY;

  const apicall = async (city) => {
    try {
      const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
      );
      const response = await data.json();
      setObject(response);
      setDisplay(true);
    } catch (e) {
      console.log(e);
    }
  };

  const backgroundStyle = {
    background: "#E3F2FD", 
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", 
    padding: "20px",
    boxSizing: "border-box",
  };

  const contentWrapperStyle = {
    background: "#FFFFFF",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px", 
  };

  return (
    <div style={backgroundStyle}>
      <Header />
      <div style={contentWrapperStyle}>
        {display ? (
          <Display handleBackClick={() => setDisplay(false)} response={object} />
        ) : (
          <Search oncitysubmit={(city) => apicall(city)} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;