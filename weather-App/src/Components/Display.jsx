const Display = (props) => {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '400px', margin: '20px auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9', color: '#333', textAlign: 'center' }}> {/* Added textAlign: 'center' to the main div */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '5px' }}>{props.response.location.name}, {props.response.location.region}</h2>
        <p style={{ fontSize: '1em', color: '#777' }}>{props.response.location.country}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', flexDirection: 'column' }}> {/* changed justify content and added flex direction to column*/}
        <div style={{ fontSize: '2.5em', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <span style={{}}>{props.response.current.temp_c}</span><span style={{ fontSize: '0.6em', fontWeight: 'normal', marginLeft: '5px' }}>°C</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src={props.response.current.condition.icon} alt={props.response.current.condition.text} style={{ width: '50px', height: '50px' }} />
          <p style={{ marginTop: '5px' }}>{props.response.current.condition.text}</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>{/* changed justify content and added flex direction to column*/}
        <p style={{ fontSize: '1em' }}>Feels like: <span style={{ fontWeight: 'bold' }}>{props.response.current.feelslike_c}°C</span></p>
        <p style={{ fontSize: '1em' }}>Wind: <span style={{ fontWeight: 'bold' }}>{props.response.current.wind_kph} kph</span></p>
      </div>
    </div>
  );
};

export default Display;