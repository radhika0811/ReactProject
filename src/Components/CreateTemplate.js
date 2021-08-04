import React from "react";
import {HideInfo, ShowInfo} from "./DisplayDetail";
import {UserContent} from "./UserContent";

export class CreateTemplate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : false,
            selectedUser : null,
        };
        this.showInformation = this.showInformation.bind(this);
        this.hideInformation = this.showInformation.bind(this);
    }
    showInformation(user){
        this.setState({show:true, selectedUser:user});
    }
    hideInformation(){
        this.setState({show:false, selectedUser:null});
    }
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>{this.props.user.name.first} {this.props.user.name.last}</td>
                        <td>{this.props.user.email}</td>
                        <td>{this.state.show ? <HideInfo onClick={this.hideInformation} user={this.props.user}/> : <ShowInfo onClick={()=> this.showInformation(this.props.user)}/>}</td>
                    </tr>
                </table>
                {this.state.selectedUser&&<UserContent content={this.state.selectedUser} show={this.state.show}/>}
            </div>
        )
    }
}