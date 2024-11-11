import { useState } from "react";
import "./App.css";

type Priority = "p1" | "p2" | "p3";

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      isCompleted: true,
      priority: "p1",
    },
  ]);

  const onAddTask = () => {
    if (taskName.trim()) {
      setTasks([
        ...tasks,
        { id: new Date().getTime(), title: taskName, isCompleted: false },
      ]);
      setTaskName("");
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Tasks</h1>
      <div className="task-input-container">
        <label htmlFor="task-input">Add Task: </label>
        <input
          id="task-input"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="task-input"
        />
        <button onClick={onAddTask} className="add-button">
          Add
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
