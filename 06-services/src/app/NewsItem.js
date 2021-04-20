import React from "react";

const NewsItem = (props) => {
  
  const item = props.item

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <p>{item.title}</p>
        </div>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="card-text">{item.short_body}</p>
          <a href="#" className="btn btn-button">
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
