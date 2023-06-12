import React from "react";
import { MdDelete } from "react-icons/md";
const index = ({ id, title, current, instructor, img }) => {
  return (
    <>
      <tr>
        <td>01</td>
        <td>
          <img src={img} />
        </td>
        <td>{title}</td>
        <td>{instructor}</td>
        <td>${current}</td>
        <td>
          <button>
            <MdDelete />
          </button>
        </td>
      </tr>
    </>
  );
};

export default index;
