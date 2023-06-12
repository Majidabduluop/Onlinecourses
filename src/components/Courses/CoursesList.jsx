import React from "react";
import Course from "./Course";
import { courses } from "./CoursesData";
import "./Courses.scss";
const CoursesList = ({ addCourse }) => {
  return (
    <section id="courses">
      <h1>our courses</h1>
      <div className="courses-container">
        {courses.map((course) => {
          return <Course key={course.id} {...course} addCourse={addCourse} />;
        })}
      </div>
    </section>
  );
};

export default CoursesList;
