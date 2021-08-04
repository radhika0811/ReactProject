import React from "react";
import {UserContent} from './UserContent';
import {HideInfo,ShowInfo} from './DisplayDetail';

export class ApiCall extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userList : [],
            show : false,
            selectedUser : null
        };
        this.showInformation = this.showInformation.bind(this);
        this.hideInformation = this.hideInformation.bind(this);
    }
    showInformation(user){
        this.setState({show:true, selectedUser:user});
    }
    hideInformation(){
        this.setState({show:false, selectedUser:null});
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        fetch('https://randomuser.me/api/?results=10')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log("running",data.results);
            this.setState({userList : data.results})
        });
    }
    render(){
        console.log(this.state.userList);
        return(
            <div>
                <table>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Description</th>
                    </tr>
                    {
                        this.state.userList.map((user,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{user.name.first} {user.name.last}</td>
                                    <td>{user.email}</td>
                                    <td>{this.state.show?<HideInfo onClick={this.hideInformation} user={user}/> : <ShowInfo onClick={()=> this.showInformation(user)} user = {user} />}</td>
                                </tr>
                            );
                        })
                    }
                </table>
                {
                    this.state.selectedUser&&<UserContent image = {this.state.selectedUser} />
                }
            </div>
        );
    }
}