import { useState } from "react";

interface AddTaskProps {
  onAddTask: (taskName: string) => void;
}

function AddTask({ onAddTask }: AddTaskProps) {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) {
      return;
    }

    onAddTask(trimmedTaskName);
    setTaskName("");
  };

  return (
    <form style={{ display: "contents" }} onSubmit={handleAddTask}>
      <label htmlFor="task-input">Add Task: </label>
      <input
        id="task-input"
        required
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="task-input"
      />
      <button className="add-button">Add</button>
    </form>
  );
}

export default AddTask;
