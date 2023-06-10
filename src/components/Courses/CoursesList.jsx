import React from "react";
import Course from "./Course";
import { courses } from "./CoursesData";
const CoursesList = () => {
  return (
    <section id="courses">
      <h1>our courses</h1>
      {courses.map((course) => {
        return <Course id={course.id} {...course} />;
      })}
    </section>
  );
};

export default CoursesList;
