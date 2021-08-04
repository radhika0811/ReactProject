import {ShowContent} from './DisplayContent';
export function UserContent(props){
    console.log(props);
    return <ShowContent content = {props.content} />
}