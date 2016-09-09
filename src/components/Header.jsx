import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

import commonStyles from "../styles/common.css"
// import Svg from "react-svg-inline"
// import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
// import gitHubSvg from "../icons/iconmonstr-github-1.svg"

export default class Header extends Component {
  
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    return (
      <header className="main-header">
        <nav className="navbar navbar-fixed-top">
          <Link to="/" className="navbar-brand">{"theDuke"}</Link>

          <ul className="nav navbar-nav nav-menu">
            <li className="nav-item">
              <Link to="/me" className="nav-link">Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
          </ul>
          
          <ul className="nav navbar-nav pull-xs-right nav-social">
            <li className="nav-item">
              <a href="https://github.com/theduke" className="nav-link" target="_blank">
                <i style={{fontSize: "30px"}} className="fa fa-4 fa-github-square" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://twitter.com/theduke_at" className="nav-link" target="_blank">
                <i style={{fontSize: "30px"}} className="fa fa-twtr-custom" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
