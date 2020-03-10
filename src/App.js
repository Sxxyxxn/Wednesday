import React, { Component } from "react";
import "./App.css";
import Home from "./component/Home";
import { Router } from "@reach/router";
import GlobalNav from "./component/GlobalNav";
import ViewUsers from "./component/ViewUsers";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <GlobalNav />
        <Router>
          <Home path="/" />
          <ViewUsers path="/viewusers" />
          <AddUser path="add" />
          <EditUser path="edit" />
        </Router>
      </React.Fragment>
    );
  }
}
