import React, { useState } from "react";
import Course from "./Course";
import { courses } from "./CoursesData";
import "./Courses.scss";
const CoursesList = () => {
  const addToCart = (id) => {};
  return (
    <section id="courses">
      <h1>our courses</h1>
      <div className="courses-container">
        {courses.map((course) => {
          return <Course id={course.id} {...course} />;
        })}
      </div>
    </section>
  );
};

export default CoursesList;
