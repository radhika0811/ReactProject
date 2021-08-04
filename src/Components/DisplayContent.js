export function ShowContent(props){
    console.log(props.iamge,"running");
    return <div>
        <p>{props.image.gender}</p>
        <h1>Hello Display The User Detail</h1>
    </div>
}