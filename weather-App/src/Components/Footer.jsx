const Footer=()=>{
    return(
        <div style={styles.footer}>
            <h2>©☀️☁︎⚡️Forecast.com</h2>
        </div>
    )
}

const styles = {
    footer: {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "black", 
        color: "white",
        textAlign: "center",
        padding: "5px 0",  
        fontWeight: "bold",
        boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)", 
    },
};


export default Footer;