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

  return (
    <>
      <Header />
      <div style={{ marginTop:"100px",display: "flex", justifyContent: "center" }}>
        {display ? (
          <Display response={object} />
        ) : (
          <Search oncitysubmit={(city) => apicall(city)} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
