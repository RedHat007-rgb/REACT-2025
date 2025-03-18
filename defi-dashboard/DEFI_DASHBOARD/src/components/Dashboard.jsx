import { useEffect, useState } from "react";

const DashBoard = () => {
    // Initialize loading as true since we start by fetching data.
    const [loading, setLoading] = useState(true);
    // Initialize error as null, so we only show an error if one occurs.
    const [error, setError] = useState(null);
    const [info, setInfo] = useState([]);
    const [view, setView] = useState("List View");

    useEffect(() => {
       coingecko();
    }, []);
    let top10= info.slice(0,10);
    async function coingecko() {
        try {
            const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
            const data = await response.json();
            setInfo(data);   
        } catch (err) {
            setError(err);    
        } finally {
            // Set loading to false when data fetching is complete.
            setLoading(false);
        }
    }
    
    return (
        <div>
            <div>
                <h2>Welcome to DeFI DashBoard</h2>
                <button
                    onClick={() => { setView(view === "List View" ? "Chart View" : "List View") }}
                    style={{
                        color: "green",
                        width: 150,
                        height: 40,
                        fontFamily: "monospace",
                        fontSize: 18,
                        borderRadius: 10,
                        background: view === "List View" ? "black" : "red"
                    }}
                >
                    {view}
                </button>
            </div>
            <div>
                {loading ? (
                    <h2>Loading....</h2>
                ) : error ? (
                    <div>{JSON.stringify(error)}</div>
                ) : (
                    <div>
                        {view==="List View" ? <div>{top10.map((item) => {
                            return <p key={item.id}>{item.name}</p>;
                        })}</div>:<div>
                            {JSON.stringify(top10)}
                            </div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default DashBoard;
