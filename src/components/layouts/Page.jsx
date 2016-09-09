import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"

class Page extends Component {
  render() {
    const { props, context } = this

    const {
      pkg,
    } = context.metadata

    const {
      __filename,
      __url,
      head,
      body,
      header,
      footer,
    } = props

    invariant(
      typeof head.title === "string",
      `Your page '${ __filename }' needs a title`
    )

    const metaTitle = (head.metaTitle ? head.metaTitle : head.title) + " | Christoph Herzog - theduke.at"

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      {
        property: "og:url",
        content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      },
      { property: "og:description", content: head.description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:creator", content: `@${ pkg.twitter }` },
      { name: "twitter:description", content: head.description },
      { name: "description", content: head.description },
      { name: "google-site-verification", content: "dUGKC3UE2cH70_XpZkV_XVmoZCxijoR94JMoegZmZOk"}
    ]
    return (
      <div>
        <Helmet
          title={ metaTitle }
          meta={ meta }
        />

        <div className="container main-container">
          <div className="page-title">
            {
              head.title &&
              <h1 className="display-3 page-title">{ head.title }</h1>
            }
          </div>
          { header }
          <BodyContainer>{ body }</BodyContainer>
          { props.children }
          { footer }
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
