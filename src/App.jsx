import React, { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { courses } from "./components/Courses/CoursesData";
const App = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  // Add course to the cart
  const addCourse = (id) => {
    const newCourse = courses.filter((course) => {
      return course.id === id;
    });
    const [selectedCourse] = newCourse;
    setEnrolledCourses([...enrolledCourses, selectedCourse]);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home addCourse={addCourse} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/cart"
          element={<Cart enrolledCourses={enrolledCourses} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
