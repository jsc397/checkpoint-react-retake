import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Contacts</h1>
        <nav>
          <Link to="/">Homepage</Link>
          <Link to="/new-contact">New Contacts</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
