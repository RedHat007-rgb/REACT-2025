// Step 3: Create the Header Component
// Objective: Build a header for the app.
// Why: It provides a consistent title and navigation placeholder across pages.
// How:
// Open Header.jsx.
// Define a functional component that returns JSX for a header section, including a title (e.g., “DeFi Dashboard”) and a placeholder navigation list.
// Export the component so it can be used elsewhere.


const Header=()=>{
    return(
        <>
            <h1>
                DEFI DASHBOARD
            </h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>ACtion</li>
        </ul>

        </>
        
    )
}

export default Header;