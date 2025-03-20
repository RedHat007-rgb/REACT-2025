import { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import CardComponent from "./CardContainer";

const DashBoard = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [info, setInfo] = useState([]);
    const [view, setView] = useState("List View");

    useEffect(() => {
        coingecko();
    }, []);

    let top10 = info.slice(0, 10);

    async function coingecko() {
        try {
            const response = await fetch(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
            );
            const data = await response.json();
            setInfo(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
    };

    const buttonStyle = {
        color: "white",
        width: "160px",
        height: "45px",
        fontFamily: "monospace",
        fontSize: "18px",
        borderRadius: "10px",
        cursor: "pointer",
        border: "none",
        background: view === "List View" ? "#007BFF" : "#DC3545",
        transition: "background 0.3s",
    };

    const listContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
        marginTop: "20px",
    };

    const errorStyle = {
        color: "red",
        backgroundColor: "#ffe6e6",
        padding: "15px",
        borderRadius: "8px",
        border: "1px solid red",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "bold",
        width: "80%",
        maxWidth: "400px",
        marginTop: "20px",
    };

    return (
        <div style={containerStyle}>
            <h2>Welcome to DeFi DashBoard</h2>
            <button onClick={() => setView(view === "List View" ? "Chart View" : "List View")} style={buttonStyle}>
                {view}
            </button>

            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <div style={errorStyle}>{error}</div>
            ) : (
                    <div style={listContainerStyle}>
                    {view === "List View"
                        ? (<CardComponent>
                            {top10.map((item) => (
                                <CryptoCard
                                    key={item.id}
                                    name={item.name}
                                    price={item.current_price}
                                    change={item.price_change_percentage_24h}
                                />
                            ))}
                        </CardComponent>)
                        : (<div>
                            {JSON.stringify(top10)}
                        </div>)
                    }
                </div>
            )}
        </div>
    );
};

export default DashBoard;
