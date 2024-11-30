type TaskListHeaderProps = {
  count: number;
};

export default function TaskListHeader({ count }: TaskListHeaderProps) {
  return <h2 className="task-list-header">Total tasks: {count}</h2>;
}
