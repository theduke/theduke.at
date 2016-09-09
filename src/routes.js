import React, { Component } from "react"
import { Route } from "react-router"

import PhenomicPageContainer from "phenomic/lib/PageContainer"

import AppContainer from "./components/AppContainer"
import Page from "./components/layouts/Page"
import PageError from "./components/layouts/PageError"
import PageLoading from "./components/layouts/PageLoading"
import Homepage from "./components/layouts/Homepage"
import Blog from "./components/layouts/Blog"
import Post from "./components/layouts/Post"

require("./styles/hightlight-js.global.css")
require("./styles/bootstrap4.global.css")
require("./styles/app.scss")

class PageContainer extends Component {
  render() {
    const { props } = this
    return (
      <PhenomicPageContainer
        { ...props }
        layouts={ {
          Page,
          PageError,
          PageLoading,
          Homepage,
          Blog,
          Post,
        } }
      />
    )
  }
}

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
