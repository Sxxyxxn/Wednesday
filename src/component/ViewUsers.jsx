import React, { Component } from "react";
import Axios from "axios";
import UserData from "./UserData";
import { navigate } from "@reach/router";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    this.getData();
  }

  getData = e => {
    Axios.get(`http://localhost:4000/api/users`).then(res => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  };

  onDeleteSuccess = e => {
    this.getData();
  };

  render() {
    return (
      <div>
        {this.state.users.map((item, i) => {
          console.log(item);
          return (
            <UserData
              key={i}
              first_name={item.first_name}
              last_name={item.last_name}
              age={item.age}
              _id={item._id}
              onDeleteSuccess={this.onDeleteSuccess}
            />
          );
        })}
      </div>
    );
  }
}
