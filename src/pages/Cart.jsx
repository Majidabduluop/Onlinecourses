import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Cart";
import "../components/Cart/Cart.scss";
const Cart = ({ enrolledCourses }) => {
  if (enrolledCourses.length > 0) {
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
              {enrolledCourses.map((course) => {
                console.log(course.id);
                return <Table key={course.id} {...course} />;
              })}
            </tbody>
          </table>
        </section>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <section id="cart">
          <h1>No course added!</h1>
        </section>
      </>
    );
  }
};

export default Cart;
