import { afterEach, describe, expect, test } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import App from "./App";
afterEach(cleanup);

describe("App", () => {
  test("Should render input field and add button", () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("should clear the input field after adding a task", () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, { target: { value: "Test New Task" } });
    fireEvent.click(button);

    expect(screen.getByText("Test New Task")).toBeInTheDocument();
  });
  test("should not add an empty task", () => {});
  test("should add a task by pressing the enter key", () => {});
});
