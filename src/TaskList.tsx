import { PropsWithChildren, ReactNode } from "react";

type TaskListProps = {
  header?: ReactNode;
};

function TaskList({ header, children }: PropsWithChildren<TaskListProps>) {
  return (
    <>
      {header}
      <ul className="task-list">{children}</ul>
    </>
  );
}

export default TaskList;
