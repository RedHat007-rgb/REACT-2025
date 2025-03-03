export function ProfileComponent(props){
  return(
    <div style={{
      color:"greenyellow",
      paddingTop:20,
      justifyItems:"center",
      borderRadius:20,
      backgroundColor:"black",
      height:300,
      width:300,
    }}>
      <img style={{borderRadius:"50%",height:80,width:80,objectFit:"cover"}}src={props.user.avatarURL}></img>
      <h1 >{props.user.name}</h1>
      <h2>{props.user.age}</h2>
      <h3>{props.user.location}</h3>
      {props.user.isOnline?<p>Online</p>:<></>}
    </div>
  )
}