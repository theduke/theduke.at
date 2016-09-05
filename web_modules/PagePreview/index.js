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
    img = (
      <div style={{textAlign: "center"}}>
        <Svg svg={require("../icons/" + img)} className="card-img-top" width="5rem" />
      </div>
    );
  }

  return (
    <div className="card">
      {img}
      <div className="card-block">
        <Link to={page.__url}> 
          <h5 className="card-title">{ page.title }</h5>
        </Link>
        <p className="card-text">{ page.summary }</p>
        <p className="card-text">
          <small className="text-muted">{ date }</small>
          {
            page.tags &&
            <ul className="list-inline">
              <li className="list-inline-item text-muted">
                <i className="fa fa-tags"></i>
              </li>
              {page.tags.map(t => <li className="list-inline-item"><small className="text-muted"><em>{t}</em></small></li>)}
            </ul>
          }
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
