import { useState } from 'react';

const Create = () => {
  const [fields, setFields] = useState(null);
  const [second, setSecond] = useState(false);
  const [on, setOn] = useState(false);

  const renderSecond = () => {
    if (fields && !second) {
      setSecond(true);
    }
  };

  const handle = () => {
    setOn(!on);
    setFields(null);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dynamic Form Generator</h2>
      
      <input
        style={styles.input}
        value={fields || ''}
        onChange={(e) => setFields(e.target.value)}
        type="number"
        placeholder="Enter the number of fields"
      />

      <button style={styles.createButton} onClick={renderSecond} disabled={!fields}>
        Create Form
      </button>

      {second && !on && (
        <div style={styles.confirmBox}>
          <h3 style={styles.confirmText}>Are you sure?</h3>
          <button style={styles.submitButton}>Submit</button>
          <button style={styles.backButton} onClick={handle}>Back</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh'
  },
  heading: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '200px',
    textAlign: 'center'
  },
  createButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px'
  },
  confirmBox: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'inline-block'
  },
  confirmText: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333'
  },
  submitButton: {
    padding: '8px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px'
  },
  backButton: {
    padding: '8px 15px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

function App() {
  return <Create />;
}

export default App;

