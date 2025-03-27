import { useState } from "react";

const Search = (props) => {
    const [city,setCity]=useState("");


  return (
    <div style={styles.container}>
      <input onChange={(e)=>{setCity(e.target.value)}} style={styles.input} placeholder="Enter the city" />
      <button onClick={()=>{props.oncitysubmit(city)}} style={styles.button}>Get Weather</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    height: "100vh", 
    flexDirection: "column", // Stacks input and button vertically
    gap: "15px", // Adds spacing
  },
  input: {
    width: "250px",
    padding: "12px",
    borderRadius: "25px",
    border: "2px solid #FF8C00", // Orange border
    fontSize: "16px",
    outline: "none",
    textAlign: "center",
  },
  button: {
    width: "150px",
    padding: "12px",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "#FF8C00", // Vibrant orange button
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Search;
