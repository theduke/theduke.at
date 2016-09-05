import React, { Component } from "react";
import moment from "moment";
// import { Link } from "react-router"

import styles from "./index.css"

export default class Footer extends Component {
  render() {
    return (
      <footer className={ styles.footer }>
        <a href="http://theduke.at">{ "theduke.at" }</a>
        { " | " }
        <i className="fa fa-copyright" aria-hidden="true"></i>
        <span className="sr-only">Copyright</span>
          { " Christoph Herzog, " + moment().format("YYYY") 
            + " | Vienna, Austria" }
      </footer>
    )
  }
}
