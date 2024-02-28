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
          <Link>
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link>
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link>
            <FaInstagram />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default index;
