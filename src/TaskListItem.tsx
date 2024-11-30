// import { PropsWithChildren } from "react";

// export default function TaskListItem({ children }: PropsWithChildren) {
//   return <li>{children}</li>;
// }

import { PropsWithChildren } from "react";
import { Task } from "./types";

type TaskListItemProps = PropsWithChildren<{
  task: Task;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}>;

export default function TaskListItem({
  children,
  task,
  onRemove,
  onToggle,
}: TaskListItemProps) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task.id)}
      />
      <span className={`task-title ${task.isCompleted ? "completed" : ""}`}>
        {children}
      </span>
      <button className="remove-button" onClick={() => onRemove(task.id)}>
        Remove
      </button>
    </li>
  );
}
