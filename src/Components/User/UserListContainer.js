import React from "react";

import  UserDetails from "../UserDetails";

export class UserListContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showButtonStatus:false,
            selectedUser:null,
        };
    }
    showInformation = (user) =>{
        this.setState({ showButtonStatus: true , selectedUser:user});
    
      }
      hideInformation = () => {
        this.setState({ showButtonStatus: false , selectedUser:null});
      }
      render(){
          console.log(this.state.showButtonStatus);
          return(<tr>
                      <td>{this.props.userData.name.title} {this.props.userData.name.first} {this.props.userData.name.last}</td>
                      <td>{this.props.userData.email}</td> 
                      <td id = "description-container">{this.state.showButtonStatus ? <button user = {this.props.userData} onClick = {this.hideInformation}>Hide Details</button> : <button user = {this.props.userData}  onClick={() => this.showInformation(this.props.userData)}>Show Details</button>}</td>
                      {this.state.selectedUser&&<UserDetails content={this.state.selectedUser} show={this.state.showButtonStatus}/>}
                  </tr>
          )
      }
}