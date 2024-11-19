import { useState } from "react";

interface AddTaskProps {
  onAddTask: (taskName: string) => void;
}

function AddTask({ onAddTask }: AddTaskProps) {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) {
      return;
    }

    onAddTask(trimmedTaskName);
    setTaskName("");
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };
  return (
    <>
      <label htmlFor="task-input">Add Task: </label>
      <input
        id="task-input"
        value={taskName}
        onKeyDown={onInputKeyDown}
        onChange={(e) => setTaskName(e.target.value)}
        className="task-input"
      />
      <button onClick={handleAddTask} className="add-button">
        Add
      </button>
    </>
  );
}

export default AddTask;
