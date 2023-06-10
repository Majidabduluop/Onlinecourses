import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero";
import CoursesList from "../components/Courses/CoursesList";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CoursesList />
    </>
  );
};

export default Home;
