// Challenge 2: Dynamic Alert Component
// 📌 Scenario: Your app needs a reusable alert system. 
// Create an AlertBox that accepts the following props:
// ✅ Props: message, type (success, error, warning), and dismissible.
// ✅ Bonus: Style the alert differently based on type and allow it to close when dismissible is true.


import { useState } from "react";

export default function DynamicAlert({message,type,dismissable}) {
  const [visible, setVisible] = useState(true);

  const style = {
    alertBox: {
      padding: "15px",
      borderRadius: "5px",
      margin: "10px 0",
      textAlign: "center",
      fontSize: "18px",
      fontWeight: "bold",
    },
    success: {
      backgroundColor: "green",
      color: "white",
    },
    error: {
      backgroundColor: "lightcoral",
      color: "white",
    },
    warning: {
      backgroundColor: "red",
      color: "white",
    },
    button: {
      marginTop: "10px",
      padding: "5px 10px",
      backgroundColor: "black",
      color: "white",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
    },
  };

  function handleDismiss() {
    setVisible(false);
  }

  return (
    <>
      {visible && (
        <div style={{ ...style.alertBox, ...style[type] }}>
          <h1>{message}</h1>
          {dismissable && <button style={style.button} onClick={handleDismiss}>Dismiss</button>}
        </div>
      )}
    </>
  );
}
