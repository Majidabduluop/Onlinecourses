import React from "react";
import "./Footer.scss";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <footer>
      <h4>Developed By Abdul Majid</h4>
      <ul className="social-links">
        <li>
          <Link to={"https://github.com/hassanalee"} target="_blank">
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link to={"https://linkedin.com/in/hassanale"} target="_blank">
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link to={"https://instagram.com/me.hassanali"} target="_blank">
            <FaInstagram />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default index;
