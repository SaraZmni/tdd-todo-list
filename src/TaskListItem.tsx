import { PropsWithChildren } from "react";

export default function TaskListItem({ children }: PropsWithChildren) {
  return <li>{children}</li>;
}
