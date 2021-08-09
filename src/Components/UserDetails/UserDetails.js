import {UserDetailsContainer} from './UserDetailsContainer';
export function UserDetails(props){
    console.log(props.show);
        return <UserDetailsContainer content = {props.content} />
}