import DynamicAlert from "./Alert"
import Button from "./Button"
import List from "./List";

import { ProfileComponent } from "./Profile"



export default function App() {
  // const user={
  //   name:"REDDY",
  //   age:50,
  //   location:"Hyderabad",
  //   isOnline:true,
  //   avatarURL:"https://media.istockphoto.com/id/2164380666/photo/close-up-portrait-of-wolf-standing-against-black-background.jpg?s=1024x1024&w=is&k=20&c=oqosxXFh5GjsVdGl1Vgs_xfCbtNm6N1XIksy_SZ04RI=",
  // }
  const productData = [
    { id: 1, title: "Laptop", price: 342999, imageURL: "https://vsprod.vijaysales.com/media/catalog/product/2/2/222901-image1_2.jpg?optimize=medium&fit=bounds&height=500&width=500" },
    { id: 2, title: "Phone", price: 169900, imageURL: "https://vsprod.vijaysales.com/media/catalog/product/2/3/232304-image.jpg?optimize=medium&fit=bounds&height=500&width=500" },
    { id: 3, title: "Headphones", price: 56900, imageURL: "https://vsprod.vijaysales.com/media/catalog/product/2/3/232328-image.jpg?optimize=medium&fit=bounds&height=500&width=500" },
    { id: 4, title: "chavaka hearphones", price: 5, imageURL: "https://vsprod.vijaysales.com/media/catalog/product/2/2/228782-image1.jpg?optimize=medium&fit=bounds&height=500&width=500" },
  ];
  

  return (
    <>
      {/* <ProfileComponent user={user}/>

      <DynamicAlert 
        message="God Morning....."
        type="success"
        dismissable={true}
      /> */}
      {/* <Button 
        label="Click me"
        variant="secondary"
        size="small"
        />
      <List
        data={productData}
      /> */}
      <List products={productData} ></List>

        
    </>
    
    
      
  )
}



