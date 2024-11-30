import { useState } from "react";
import "./App.css";
import { Task } from "./types";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TaskListItem from "./TaskListItem";
import TaskListHeader from "./TaskListHeader";

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

  const onRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Tasks</h1>
      <div className="task-input-container">
        <AddTask onAddTask={onAddTask} />
      </div>
      <TaskList>
        <TaskListHeader count={tasks.length} />
        {tasks.map((task) => (
          // <TaskListItem key={task.id}>{task.title}</TaskListItem>
          <TaskListItem
            key={task.id}
            task={task}
            onRemove={onRemoveTask}
            onToggle={onToggleTask}
          >
            {task.title}
          </TaskListItem>
        ))}
      </TaskList>
    </div>
  );
}

export default App;
