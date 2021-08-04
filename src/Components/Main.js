import React from "react";
import { CreateTemplate } from "./CreateTemplate";

export class ApiCall extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userList : [],
            search : null
        };
    }
    componentDidMount(){
        this.getData();
    }
    searchSpace = (event) =>{
        let keyword = event.target.value;
        this.setState({search:keyword});
    }
    getData(){
        const key=10;
        const url = "https://randomuser.me/api/?results="+key;
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log("running",data.results);
            this.setState({userList : data.results})
        });
    }
    displayMoreData(key){
        const url = "https://randomuser.me/api/?results="+key;
        fetch(url)
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
            <div className="box">
                <input type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} />
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Description</th>
                    </tr>
                    </table>
                    {
                        this.state.userList.filter((data)=>{
                            if(this.state.search===null)
                            return data
                            else if(data.name.first.includes(this.state.search)||data.name.last.includes(this.state.search)){
                                return data
                            }
                        }).map((user,index)=>{
                            return <CreateTemplate user={user} key={index} />
                        })}
                <button onClick= {()=>this.displayMoreData(5)}>Load More</button>
            </div>
        );
    }
}