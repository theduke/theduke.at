import React, { Component, PropTypes } from "react"
import moment from "moment"
import Disqus from "react-disqus-thread"

import Page from "./Page"

class Post extends Component {

  // it's up to you to choose what to do with this layout ;)

  render() {
    const { props } = this;
    const { head } = props;

    const date = head.date ? moment(head.date) : null;
    const tags = head.tags || null;

    return (
      <Page
        { ...props }
        header={
          <header className="text-muted">
          {
            date &&
            <div>
              <time dateTime={ date.format() }>
                { date.format("YYYY-MM-DD") }
              </time>
            </div>
          }
          {
            tags &&
              <ul className="list-inline tags">
                <li className="list-inline-item">
                  <i className="fa fa-tags" aria-hidden="true"></i>
                </li>
                { tags.map(t => 
                    <li className="list-inline-item" key={ t }><em>{ t }</em></li>) }
              </ul>
          }
          </header>
        }
      >
        {props.children}

        <div className="comments" style={{marginTop: "5rem"}}>
          <Disqus identifier={head.id}
                  title={head.title}
                  shortname="the-duke"
                  url={"http://theduke.at/" + head.route}
                  />
        </div>
      </Page>
    )
  }
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
