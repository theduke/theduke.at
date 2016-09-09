import React, { Component, PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "./Page"
import PagesList from "../PagesList"

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
                <h4 className="card-title">Christoph Herzog</h4>
                <div className="card-text">

                  <p className="m-b-3">
                    <em>
                      Sharing my interests in Medicine, the world of IT and 
                      other rumblings in my head.
                    </em>
                  </p>


                  <div className="social">
                    <div className="pull-xs-left text-xs-center m-r-1">
                      <a href="https://twitter.com/theduke_at" target="_blank">
                        <i className="fa fa-twtr-custom fa-2x" aria-hidden="true"></i>
                        <br />
                        @theduke_at
                      </a>
                    </div>

                    <div className="pull-xs-left text-xs-center m-r-1">
                      <a href="https://github.com/theduke" target="_blank">
                        <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
                        <br />
                        @theduke
                      </a>
                    </div>

                    <div className="pull-xs-left text-xs-center">
                      <a href="mailto:chris@theduke.at">
                        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                        <br />
                        Email
                      </a>
                    </div>
                  </div>

                </div>
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
