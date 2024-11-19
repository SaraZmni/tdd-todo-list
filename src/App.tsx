import { useState } from "react";
import "./App.css";
import { Task } from "./types";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        title: taskName,
        isCompleted: false,
      },
    ]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Tasks</h1>
      <div className="task-input-container">
        <AddTask onAddTask={onAddTask} />
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
