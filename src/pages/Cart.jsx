import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Cart";
import "../components/Cart/Cart.scss";
import { courses } from "../components/Courses/CoursesData";
const Cart = () => {
  return (
    <>
      <Navbar />
      <section id="cart">
        <h1>My enrolled courses</h1>
        <table>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Image</th>
              <th>Course</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => {
              return <Table key={index} />;
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Cart;
