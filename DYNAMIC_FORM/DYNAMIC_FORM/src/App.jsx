import { useEffect, useState } from 'react'

const Create=()=>{
  const [fields,setFields]=useState(null);
  const [second,setSecond]=useState(false);
  
const set=(e)=>{
  setFields(e.target.value);
}

const renderSecond=()=>{
    if(fields!=null && second==false){
      setSecond(!second)
    }
  
}

  return(
    <>
      <input onChange={set} type="number" placeholder='Enter the fields'></input>
      <button onClick={renderSecond}>Create Form</button>
      <Verification toRender={second}/>
    </>
  )
}


const Verification=({toRender})=>{

  return(
    <div>
      {toRender ? (
        <div>
          <h3>Are you Sure?</h3>
          <button>Submit</button>
          <button>Back</button>
        </div> ):(null)
      }
    </div>
    
  )
}





function App() {
  

  return (
    <Create/>
    
  )
}

export default App
