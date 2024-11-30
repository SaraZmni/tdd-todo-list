import { afterEach, describe, expect, test } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  test("should add task to list when add button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    await user.type(input, "New Task");
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText("New Task")).toBeInTheDocument();
    });
  });
  test("should clear the input field after adding a task", async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    await user.type(input, "New Task");
    await user.click(button);

    await waitFor(() => {
      expect(input).toHaveValue("");
    });
  });
  test("should not add an empty task", async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    await user.type(input, " ");
    await user.click(button);

    await waitFor(() => {
      expect(screen.queryAllByRole("listitem")).toHaveLength(0);
    });
  });
  test("should add a task by pressing the enter key", async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });

    await user.type(input, "New Task{enter}");

    await waitFor(() => {
      expect(screen.queryAllByRole("listitem")).toHaveLength(1);
    });
  });
});

test("should render remove button for each task", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByRole("textbox", { name: "Add Task:" });
  const button = screen.getByRole("button", { name: "Add" });

  await user.type(input, "New Task");
  await user.click(button);

  await waitFor(() => {
    const removeButton = screen.getByRole("button", { name: "Remove" });
    expect(removeButton).toBeInTheDocument();
  });
});

test("should remove task when remove button is clicked", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByRole("textbox", { name: "Add Task:" });
  const addButton = screen.getByRole("button", { name: "Add" });

  await user.type(input, "New Task");
  await user.click(addButton);

  const removeButton = await screen.findByRole("button", { name: "Remove" });
  await user.click(removeButton);

  await waitFor(() => {
    expect(screen.queryByText("New Task")).not.toBeInTheDocument();
  });
});

test("should render checkbox for each task", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByRole("textbox", { name: "Add Task:" });
  const button = screen.getByRole("button", { name: "Add" });

  await user.type(input, "New Task");
  await user.click(button);

  await waitFor(() => {
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
});

test("should toggle task completion when checkbox is clicked", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByRole("textbox", { name: "Add Task:" });
  const button = screen.getByRole("button", { name: "Add" });

  await user.type(input, "New Task");
  await user.click(button);

  const checkbox = await screen.findByRole("checkbox");
  await user.click(checkbox);

  await waitFor(() => {
    expect(checkbox).toBeChecked();
  });

  await user.click(checkbox);

  await waitFor(() => {
    expect(checkbox).not.toBeChecked();
  });
});
