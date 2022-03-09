import React from "react";

import "./FilterButtons.css";

function FilterButtons() {
  return (
    <div className="FilterButtons">
      <span>
        <button aria-pressed="true">Show All Tasks</button>
        <button>Show Active Tasks</button>
        <button>Show Completed Tasks</button>
      </span>
    </div>
  );
}

export default FilterButtons;
