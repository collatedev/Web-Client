import React, { Component } from "react";
import { throws } from "assert";

class NavBar extends Component {
  state = {
    count: 0,
    imageUrl: "api/user/profilePicture"
  };

  styles = {
    fontSize: 100,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 30 }} className="alpha-af">
          {this.formatCount()}{" "}
        </span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default NavBar;
