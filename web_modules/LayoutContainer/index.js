import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

// Import global CSS before other components and their styles
import "./index.global.css"
import styles from "./index.css"

import Header from "../Header"
import Footer from "../Footer"

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <div className={ styles.layout }>
        <Helmet
          meta={ [
            {
              name: "generator", content: `${
              process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
            },
            { property: "og:site_name", content: pkg.name },
            { name: "twitter:site", content: `@${ pkg.twitter }` },
          ] }
          script={[
            {src: "https://cdn.polyfill.io/v2/polyfill.min.js"},
          ]}
          link ={[
            {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Open+Sans|Lora"},
            {rel:"stylesheet", href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"},
          ]}
        />

        { /* meta viewport safari/chrome/edge */ }
        <Helmet
          meta={ [ {
            name: "viewport", content: "width=device-width, initial-scale=1",
          } ] }
        />
        <style>{ "@-ms-viewport { width: device-width; }" }</style>

        <Header />
        <div className={ styles.content }>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}
