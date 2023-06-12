import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero";
import CoursesList from "../components/Courses/CoursesList";
import Footer from "../components/Footer";
const Home = ({ addCourse }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <CoursesList addCourse={addCourse} />
      <Footer />
    </>
  );
};

export default Home;
