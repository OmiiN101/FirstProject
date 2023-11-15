import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="text-center">
          <h6>Home Page</h6>
        </div>
        <div className="row">
          <Link to="/employees" className="btn btn-primary">
            Goto Employee Details
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
