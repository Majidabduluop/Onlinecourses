import React, { useState, useEffect } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { courses } from "./components/Courses/CoursesData";
// load local storage courses
const loadCourses = () => {
  const localCourses = localStorage.getItem("courses")
    ? JSON.parse(localStorage.getItem("courses"))
    : [];
  return localCourses;
};
const App = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(loadCourses());
  // use Effect
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);
  // Add course to the cart
  const addCourse = (id) => {
    const newCourse = courses.filter((course) => {
      return course.id === id;
    });
    const [selectedCourse] = newCourse;
    setEnrolledCourses([...enrolledCourses, selectedCourse]);
  };
  // Delete course from the cart
  const deleteCourse = (id) => {
    const newCourses = enrolledCourses.filter((course) => {
      return course.id !== id;
    });
    setEnrolledCourses(newCourses);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home addCourse={addCourse} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/cart"
          element={
            <Cart
              enrolledCourses={enrolledCourses}
              deleteCourse={deleteCourse}
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
