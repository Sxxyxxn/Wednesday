import React, { Component } from "react";
import { Link } from "@reach/router";

export default class GlobalNav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="viewusers">ViewAll</Link>
          </li>
          <li>
            <Link to="add">Add A User</Link>
          </li>
          <li>
            <Link to="edit">Edit Users</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
