import { v4 as uuid } from "uuid";
export const courses = [
  {
    id: uuid(),
    title: "HTML,CSS and JS for beginners",
    price: 150,
    current: 100,
    img: "./src/images/htmlcss.jpg",
    instructor: "John",
  },
  {
    id: uuid(),
    title: "Trading masterclass",
    price: 200,
    current: 150,
    img: "./src/images/trading.jpg",
    instructor: "Peter",
  },
  {
    id: uuid(),
    title: "Artificial intelligence",
    price: 300,
    current: 200,
    img: "./src/images/ai.jpg",
    instructor: "Moris",
  },
  {
    id: uuid(),
    title: "Blogging for beginners",
    price: 150,
    current: 100,
    img: "./src/images/blogging",
    instructor: "Lisa",
  },
  {
    id: uuid(),
    title: "Cyber security masterclass",
    price: 450,
    current: 350,
    img: "./src/images/cyber-security.jpg",
    instructor: "John",
  },
];
