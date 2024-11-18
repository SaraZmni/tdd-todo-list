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
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAddTask = () => {
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) {
      return;
    }

    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        title: trimmedTaskName,
        isCompleted: false,
      },
    ]);
    setTaskName("");
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAddTask();
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
          onKeyDown={onInputKeyDown}
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
