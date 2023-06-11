import React from "react";
import { BsCartPlusFill } from "react-icons/bs";

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
      </div>
      <div className="add-to-cart">
        <button className="btn">
          <BsCartPlusFill />
        </button>
      </div>
    </article>
  );
};

export default Course;
