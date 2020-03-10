import React, { Component } from "react";
import Axios from "axios";
import "../css/viewusers.css";

export default class UserData extends Component {
  onButtonClick = e => {
    e.preventDefault();
    console.log(this.props._id);
    Axios.delete(`http://localhost:4000/api/users/${this.props._id}`).then(
      res => {
        console.log(res.data);
        if (res.data.result === true) {
          this.props.onDeleteSuccess();
        }
      }
    );
  };

  render() {
    return (
      <ul className="user-lists">
        <li>{this.props.first_name}</li>
        <li>{this.props.last_name}</li>
        <li>{this.props.age}</li>
        <li>
          <button onClick={this.onButtonClick}>delete</button>
        </li>
        <hr />
      </ul>
    );
  }
}
