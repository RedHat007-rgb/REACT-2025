import Header from "./Components/Header"
import Search from "./Components/Search";
import Footer from "./Components/Footer"


function App() {
  const key=import.meta.env.VITE_API_KEY;;
  
  const apicall=async (city)=>{
    try{
      const  data=await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`);
       const response=await data.json();
       console.log(response);
    }catch(e){
      console.log(e)
    } 
  }

  return (
    <>
      <Header/>
        <Search oncitysubmit={(city)=>apicall(city)}/>
      <Footer/>
    </>
  )
}

export default App
