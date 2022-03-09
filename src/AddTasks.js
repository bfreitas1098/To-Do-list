import React from "react";

import "./AddTasks.css";

function AddTasks() {
  return (
    <div className="AddTasks">
      <form>
        <input type="text" autoComplete="off" autoFocus="on" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default AddTasks;
