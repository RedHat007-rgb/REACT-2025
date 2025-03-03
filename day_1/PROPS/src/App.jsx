import DynamicAlert from "./Alert"
import Button from "./Button"

import { ProfileComponent } from "./Profile"



export default function App() {
  // const user={
  //   name:"REDDY",
  //   age:50,
  //   location:"Hyderabad",
  //   isOnline:true,
  //   avatarURL:"https://media.istockphoto.com/id/2164380666/photo/close-up-portrait-of-wolf-standing-against-black-background.jpg?s=1024x1024&w=is&k=20&c=oqosxXFh5GjsVdGl1Vgs_xfCbtNm6N1XIksy_SZ04RI=",
  // }
  

  return (
    <>
      {/* <ProfileComponent user={user}/>

      <DynamicAlert 
        message="God Morning....."
        type="success"
        dismissable={true}
      /> */}
      <Button 
        label="Click me"
        variant="secondary"
        size="small"
        />

        
    </>
    
    
      
  )
}



