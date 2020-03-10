import React, { Component } from "react";
import Axios from "axios";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  userSubmit = e => {
    e.preventDefault();
    console.log("A user was submitted");

    var formData = new FormData(this.myRef.current);

    var dataToCreate = {
      first_name: formData.get("user-first-name"),
      last_name: formData.get("user-last-name"),
      age: formData.get("user-age")
    };

    Axios.post(`http://localhost:4000/api/users`, dataToCreate).then(res => {
      console.log(res.data);
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.userSubmit} ref={this.myRef}>
          <label>First Name:</label>
          <input type="text" name="user-first-name" required />

          <label>Last Name:</label>
          <input type="text" name="user-last-name" required />

          <label>Age:</label>
          <input type="text" name="user-age" required />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
