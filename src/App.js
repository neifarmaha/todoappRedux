import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="mode">
      <h1>TO DO</h1>
     
      </div>
      <h6 style={{ color: "white", marginBottom: "30px", marginTop: "10px" }}>
        {" "}
        Welcome to my todo application
      </h6>

      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
