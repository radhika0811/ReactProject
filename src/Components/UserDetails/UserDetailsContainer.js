export function UserDetailsContainer(props){
    console.log(props.content,"runnning");
    return <div className="container-box" >
        <img src={props.content.picture.large} alt="no image loading"></img>
        <p className = "gender">Gender: {props.content.gender}</p>
        <p className = "phone">Contact No: {props.content.phone}</p>
        <p className = "address">Address: {props.content.location.street.name}- {props.content.location.city}, {props.content.location.country}</p>
        
    </div>
}