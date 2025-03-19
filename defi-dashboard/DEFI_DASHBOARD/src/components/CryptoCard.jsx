// eslint-disable-next-line react/prop-types
const CryptoCard = ({ name, price, change }) => {
    const cardStyle = {
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "250px",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    };

    const headingStyle = {
        fontSize: "20px",
        color: "#333",
        marginBottom: "10px",
    };

    const priceStyle = {
        fontSize: "18px",
        fontWeight: "bold",
        color: "green",
    };

    const changeStyle = {
        fontSize: "16px",
        color: change >= 0 ? "green" : "red",
    };

    const errorStyle = {
        color: "red",
        fontSize: "14px",
    };

    if (name && price !== undefined && change !== undefined) {
        return (
            <div style={cardStyle}>
                <h2 style={headingStyle}>{name}</h2>
                <p style={priceStyle}>${price}</p>
                <p style={changeStyle}>{change}%</p>
            </div>
        );
    } else if (price === undefined) {
        return (
            <div style={cardStyle}>
                <h2 style={headingStyle}>{name}</h2>
                <p style={changeStyle}>{change !== undefined ? `${change}%` : "No change data"}</p>
                <p style={errorStyle}>We cant find the price...</p>
            </div>
        );
    } else {
        return (
            <div style={cardStyle}>
                <h2 style={errorStyle}>Sorry, we could not fetch details...</h2>
            </div>
        );
    }
};

export default CryptoCard;
