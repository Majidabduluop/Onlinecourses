import React from "react";
import "./courses.scss";
const Course = ({ id, img, title, current, price, instructor }) => {
  return (
    <article className="course">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <div className="course-info">
        <h2>{title}</h2>
        <h4>By : {instructor}</h4>
        <span className="price">${price}</span>
        <span className="current">${current}</span>
        <button className="add-to-cart">add to cart</button>
      </div>
    </article>
  );
};

export default Course;
