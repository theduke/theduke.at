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
    // const { pkg } = this.context.metadata

    /*
    const x = (
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <Link
              className={ styles.link }
              to="/"
            >
              { "Home" }
            </Link>
          </div>
          <div className={ styles.navPart2 }>
            { pkg.twitter &&
              <a
                href={ `https://twitter.com/${pkg.twitter}` }
                className={ styles.link }
                target="_blank"
              >
                <Svg svg={ twitterSvg } />
                  { "Twitter" }
              </a>
            }
            { pkg.github &&
              <a
                href={ pkg.github }
                className={ styles.link }
                target="_blank"
              >
                <Svg svg={ gitHubSvg } />
                { "GitHub" }
              </a>
            }
          </div>
        </nav>
      </header>
    );
    */

    return (
      <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
        <Link to="/" className="navbar-brand">{"theduke.at"}</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">{ "About" }</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">{ "Blog" }</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a href="https://github.com/theduke" className="nav-link" target="_blank">
              <i style={{fontSize: "25px"}} className="fa fa-github-square" aria-hidden="true"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://twitter.com/theduke_at" className="nav-link" target="_blank">
              <i style={{fontSize: "25px"}} className={"fa " + commonStyles["fa-twtr-custom"]} aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
