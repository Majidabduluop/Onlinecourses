import React from "react";
import { MdDelete } from "react-icons/md";
const index = () => {
  return (
    <>
      <tr>
        <td>01</td>
        <td>
          <img src="./images/nodejs.jpg" alt="nodejs" />
        </td>
        <td>NodeJS</td>
        <td>John</td>
        <td>$150</td>
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
