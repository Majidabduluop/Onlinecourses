import React from "react";
import image from "../../images/hero-bg.jpg";
import { Link } from "react-router-dom";
import "./Hero.scss";
const index = () => {
  return (
    <section id="hero">
      <img src={image} alt="Hero-image" />
      <div className="hero-content">
        <h2>learn something today</h2>
        <p>special offer all courses for $15</p>
        <div className="buttons">
          <Link to={"/about"}>About</Link>
          <Link to="/courses">Courses</Link>
        </div>
      </div>
    </section>
  );
};

export default index;
