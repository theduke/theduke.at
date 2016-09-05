import React, { Component, PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import PagesList from "../../PagesList"

const numberOfLatestPosts = 10

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: p => p.type === "blog" && !p.draft,
      sort: "date",
      reverse: true,
    })
    .slice(0, numberOfLatestPosts)

    return (
      <Page { ...this.props }>
        <div className="row">
          <div className="col-sm-6">
            <div className="card" style={{marginTop: "2.5rem"}}>
              <div className="card-block">
                <h4 className="card-title">About</h4>
                <p className="card-text">

                </p>
              </div>
            </div> 
          </div>

          <div className="col-sm-6">
            <h3>Latest Posts</h3>
            <PagesList pages={ latestPosts } />
          </div>
        </div>
      </Page>

    )
  }
}
