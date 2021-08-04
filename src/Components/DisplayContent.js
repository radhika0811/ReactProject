export function ShowContent(props){
    console.log(props.content,"running");
    return <div>
        <p>Gender: {props.content.gender}</p>
        <p>Contact No: {props.content.phone}</p>
        <p>Address: {props.content.location.street.name}- {props.content.location.city}, {props.content.location.country}</p>
        <img src = {props.content.picture.large} alt = {props.content.name.first} ></img>
    </div>
}