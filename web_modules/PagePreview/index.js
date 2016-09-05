import React, { PropTypes } from "react"
import moment from "moment"
import { Link } from "react-router"
import Svg from "react-svg-inline";

const PagePreview = (page) => {
  const date = page.date ? moment(page.date).format("YYYY-MM-DD") : null;

  let img = null;
  if (page.list_image) {
    img = (<img src={require(page.list_image)} className="card-img-top" />);
  }
  else {
    switch (page.category) {
      case "develop":
        img = "iconmonstr-code-4.svg";  
        break;
      case "medicine":
        img = "iconmonstr-favorite-3.svg";  
        break;
      default:
        img = "iconmonstr-help-1.svg";  
        break;
    }
    img = (<Svg svg={require("../icons/" + img)} className="card-img-top" width="8rem" />);
  }

  return (
    <div className="card" style={{width: "20rem"}}>
      {img}
      <div className="card-block">
        <Link to={page.__url}> 
          <h4 className="card-title">{ page.title }</h4>
        </Link>
        <p className="card-text">{ page.summary }</p>
        <p className="card-text">
          <small className="text-muted">{ date }</small>
        </p>
      </div>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  summary: PropTypes.string,
  list_image: PropTypes.string,
}

export default PagePreview
