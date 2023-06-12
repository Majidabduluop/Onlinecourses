import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero";
import CoursesList from "../components/Courses/CoursesList";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CoursesList />
      <Footer />
    </>
  );
};

export default Home;
