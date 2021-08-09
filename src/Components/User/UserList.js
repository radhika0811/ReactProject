import React from "react";
import { UserListContainer } from "./UserListContainer";
export class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      search: null,
      moreUsers: [],
      valueForFilter: "name",
      changeStatus : false,
    };
  }

  componentDidMount() {
    const userLocalList = JSON.parse(localStorage.getItem("users"));
    if (userLocalList) {
      console.log("userLocalList", userLocalList);
      this.setState({ userList: userLocalList });
    }
    this.getData();
  }
  getSearchKeywordFromUser = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };
  loadMoreUsers() {
    const key = 5;
    const url = "https://randomuser.me/api/?results=" + key;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("moreUSers running", data.results);
        const user = this.state.userList.concat(data.results);
        this.setState({ userList: user });
        this.setState({changeStatus : true});
        localStorage.setItem("users", JSON.stringify(user));
      });
  }
  valueForFilter = (event) => {
    console.log("filter value", event.target.value);
    this.setState({ valueForFilter: event.target.value });
  };
  getData() {
    const key = 10;
    const url = "https://randomuser.me/api/?results=" + key;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ userList: data.results });
        localStorage.setItem("users", JSON.stringify(data.results));
        // this.setState({changeStatus : false});
      });
  }
  // shouldComponentUpdate(){
  //   if(!this.state.changeStatus){
  //     console.log("update working");
  //     return true;
  //   }
  //   else
  //     return false;
  // }
  render() {
    return (
      <div className="box">
        <input id="search-bar"
          type="text"
          placeholder="Enter item to be searched"
          onChange={(e) => this.getSearchKeywordFromUser(e)}
        />
        <select id="dropdown" onChange={(e) => this.valueForFilter(e)}>
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
        <div className = "main-box">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
          </tr>
          {this.state.userList
            .filter((data) => {
              if (this.state.search === null) return data;
              else if (
                this.state.valueForFilter === "name" &&
                (data.name.title
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase()) ||data.name.first
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase()) ||
                  data.name.last
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase()))
              ) {
                return data;
              } else if (
                this.state.valueForFilter === "email" &&
                data.email.includes(this.state.search)
              ) {
                return data;
              }
            })
            .map((user, index) => {
              return <UserListContainer userData={user} key={index} />;
            })}
        </table>
        </div>
        <button id="load-more-btn" onClick={() => this.loadMoreUsers()}>Load More</button>
      </div>
    );
  }
}