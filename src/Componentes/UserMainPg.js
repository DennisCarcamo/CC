import React from "react";
import Carouse from "./Carousel";
import fire from "../config/Fire";

export default class UserMainPg extends React.Component {
  constructor(props) {
    super(props);
    this.signOutUser = this.signOutUser.bind(this);
  }

  signOutUser = async () => {
    try {
      await fire.auth().signOut();
      console.log("Logged Out");
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div id="UserMainPgroot">
        <h1>This is the User Page</h1>
        <Carouse />
        <button onClick={this.signOutUser}>Log out</button>
      </div>
    );
  }
}
