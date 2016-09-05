import React, { Component, PropTypes } from "react"
import moment from "moment"

import Page from "../Page"

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
          <header>
          {
            date &&
            <div>
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <span className="sr-only">Date</span>
              {" "}
              <time datetime={ date.format() }>
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
      />
    )
  }
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
