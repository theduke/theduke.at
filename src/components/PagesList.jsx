import React, { PropTypes } from "react"

import PagePreview from "./PagePreview"

const PagesList = ({ pages }) => {
  return (
    <div className="page-list">
    {
      pages.length
      ? (
        <ul className="list-unstyled">
        {
          pages.map((page) => (
            <li key={ page.title }><PagePreview { ...page } /></li>
          ))
        }
        </ul>
      )
      : "No posts yet."
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
