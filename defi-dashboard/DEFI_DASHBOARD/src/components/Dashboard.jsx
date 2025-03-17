// Step 5: Create the Dashboard Component
// Objective: Build the main dashboard area.
// Why: It serves as the core UI placeholder for future dynamic DeFi data.
// How:
// Open Dashboard.jsx.
// Define a functional component that returns JSX for a main section with a heading (e.g., “Welcome to DeFi Dashboard”) and a short paragraph.
// Export the component.

import { useState } from "react";


const DashBoard=()=>{
    const [view,setView]=useState("List View");

    // function mode(){
    //     if(view == "List View"){
    //         setView("Chart View")
    //     }else if(view == "Chart View"){
    //         setView("List View")
    //     }
    // }
    return(
        <div>
            <h2>Welcome to DeFI DashBoard</h2>
            <button onClick={()=>{setView(view == "List View" ? "Chart View":"List View")}} style={{color:"green",
                width:150,
                height:40,
                fontFamily:"monospace",
                fontSize:18,
                borderRadius:10,
                background:view == "List View" ? "black":"red"
                }} > 
                {view}  
               
                </button>
        </div>
       
    )
}

export default DashBoard;