import ToDo from "./ToDo";
import AddTasks from "./AddTasks";
import FilterButtons from "./FilterButtons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>To-Do List</header>
      <blockquote>
        <p>"Action is the foundational key to all success." - Pablo Picasso</p>
      </blockquote>
      <AddTasks />
      <br />
      <FilterButtons />
      <h3>4 Tasks Remaining</h3>
      <ul>
        <ToDo task="Take out trash" />
        <ToDo task="Walk dog" />
        <ToDo task="Do laundry" />
        <ToDo task="Finish homework" />
      </ul>
    </div>
  );
}

export default App;
