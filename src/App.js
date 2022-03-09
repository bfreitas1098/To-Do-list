import "./App.css";

function App() {
  return (
    <div className="App">
      <header>To-Do List</header>
      <blockquote>
        <p>"Action is the foundational key to all success." - Pablo Picasso</p>
      </blockquote>
      <form>
        <input type="text" autoComplete="off" autoFocus="on" />
        <input type="submit" value="Add" />
      </form>
      <br />
      <span>
        <button>Show All Tasks</button>
        <button>Show Active Tasks</button>
        <button>Show Completed Tasks</button>
      </span>
      <h3>4 Tasks Remaining</h3>
      <ul>
        <li>
          <span>
            <input type="checkbox" />
            Take out trash
          </span>
        </li>
        <li>
          <span>
            <input type="checkbox" />
            Walk dog
          </span>
        </li>
        <li>
          <span>
            <input type="checkbox" />
            Put away laundry
          </span>
        </li>
        <li>
          <span>
            <input type="checkbox" />
            Finish homework
          </span>
        </li>
      </ul>
    </div>
  );
}

export default App;
