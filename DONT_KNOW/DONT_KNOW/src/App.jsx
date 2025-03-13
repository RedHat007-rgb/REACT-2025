import { useState } from "react";
import telugu from "./hero";
import "./HeroCard.css"; 






function Images(){
  const [number,setNumber]=useState(null);
  const [min,setMin]=useState(false);
  const randomhero=()=>{
  const random = Math.floor(Math.random() * 10);
  setNumber(random)
  setMin(true)
  }


  return(
    <div>
       {!min ?  <button  onClick={randomhero} style={{
                        background: "black",
                          height: "100vh",
                          width: "100vw",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          textAlign: "center",
                          color: "#00eaff", // Neon Blue Text
                          fontSize: "3rem",
                          fontWeight: "bold",
                          textShadow: "0 0 10px #00eaff, 0 0 20px #0073e6", // Neon Glow Effect
                          letterSpacing: "2px",
                          animation: "glow 1.5s infinite alternate"
                      }}
        >Find your favourite Hero....</button> :<Game number={number}/>}
        
    </div>
    
  )
}

const Game = ({ number }) => {
  
  
  const youtube = () => {
  window.open(`https://www.youtube.com/watch?v=${telugu[number].favoriteSongs[0]}`, "_blank");
};


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        background: "black",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "linear-gradient(145deg, #1e1e1e, #292929)",
          borderRadius: "20px",
          boxShadow: "0px 0px 20px rgba(0, 234, 255, 0.8)",
          padding: "20px",
          textAlign: "center",
          transition: "transform 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={telugu[number].imageUrl}
          alt={telugu[number].name}
          style={{
            width: "80%",
            borderRadius: "15px",
            boxShadow: "0px 5px 15px rgba(0, 255, 255, 0.3)",
            marginBottom: "15px",
          }}
        />
        <h1
          style={{
            color: "white",
            margin: "10px 0",
            textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
            fontSize: "1.8rem",
          }}
        >
          {telugu[number].name}
        </h1>
        <h2
          style={{
            color: "#00eaff",
            marginBottom: "15px",
            textShadow: "0px 0px 5px rgba(0, 234, 255, 0.6)",
            fontSize: "1.3rem",
          }}
        >
          {telugu[number].nickname}
        </h2>
        <button onClick={youtube}
          style={{
            background: "linear-gradient(145deg, #00eaff, #0073e6)",
            border: "none",
            color: "white",
            fontSize: "16px",
            padding: "10px 20px",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            boxShadow: "0px 0px 12px #00eaff, 0px 0px 24px #0073e6",
          }} 
        >
          
          {/* <a href={`https://www.youtube.com/watch?v=${telugu[number].favoriteSongs[0]}`} >
          Play Song 🎵
          </a> */}

        </button>
      </div>
    </div>
  );
};







function App() {
  const [on,setOn]=useState(false);
   
  return (
   
   <div
  style={{
    background: "black",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "#00eaff", 
    fontSize: "3rem",
    fontWeight: "bold",
    textShadow: "0 0 10px #00eaff, 0 0 20px #0073e6", 
    letterSpacing: "2px",
    fontFamily: "'Orbitron', sans-serif", 
  }} 
>
  
    {!on ? <button onClick={()=>setOn(true)} style={{ margin: "0", padding: "10px" }}>Random Hero Generator</button>:<Images/>}
  
    
    
</div>


  
  )
}




export default App
