

// eslint-disable-next-line react/prop-types
const CardComponent=({children})=>{
    const listContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
        marginTop: "20px",
    };
    return(
        <div style={listContainerStyle}>
            {children}
        </div>
    )
}


export default CardComponent
