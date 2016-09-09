import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router"

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer className="footer">
          <Link to="/">{"theduke.at"}</Link>
          { " | \u00A9 Christoph Herzog (theduke), " + moment().format("YYYY") 
            + " | Vienna, Austria" }
        </footer>
      </div>
    )
  }
}
