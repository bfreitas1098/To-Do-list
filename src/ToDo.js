import React from "react";

import "./ToDo.css";

function ToDo(props) {
  return (
    <div className="ToDo">
      <li>
        <span>
          <input type="checkbox" />
          {props.task}
        </span>
      </li>
      <span>
        <button>Edit</button>
        <button>Delete</button>
      </span>
    </div>
  );
}

export default ToDo;
