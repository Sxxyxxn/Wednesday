import React, { Component } from "react";
import Axios from "axios";

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };

    this.myRef = React.createRef();
  }

  componentDidMount() {
    Axios.get(`http://localhost:4000/api/users/${this.props._id}`).then(res => {
      this.setState({ user: res.data });
    });
  }

  editPerson = e => {
    e.preventDefault();
    var formData = new FormData(this.myRef.current);

    var dataToUpdate = {
      first_name: formData.get("first_name")
    };

    Axios.put(
      `http://localhost:4000/api/users/${this.props._id}`,
      dataToUpdate
    ).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <div>
        <form className="special" onSubmit={this.editPerson} ref={this.myRef}>
          <label>First name</label>
          <input type="text" name="firt_name" />

          <label>Last name:</label>
          <input type="text" name="last_name" />

          <label>Age</label>
          <input type="text" name="age" />

          <button type="submit" className="edit-btn">
            Update details
          </button>
        </form>

        <button className="edit-btn">Return Home</button>
      </div>
    );
  }
}
