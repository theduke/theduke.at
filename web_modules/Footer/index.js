import React, { Component } from "react";
import moment from "moment";
// import { Link } from "react-router"

import styles from "./index.css"

export default class Footer extends Component {
  render() {
    return (
      <footer className={ styles.footer }>
        <a href="https://theduke.at">{ "theduke.at" }</a>
          { " | \u00A9 Christoph Herzog, " + moment().format("YYYY") 
            + " | Vienna, Austria" }
      </footer>
    )
  }
}
