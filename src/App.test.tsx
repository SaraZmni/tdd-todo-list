import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("Should render input field and add button", () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  // test("should clear the input field after adding a task", async () => {
  //   render(<App />);
  //   const input = screen.getByRole("textbox", { name: "Add Task:" });
  //   const button = screen.getByRole("button", { name: "Add" });
  // });
  test("should not add an empty task", () => {});
  test("should add a task by pressing the enter key", () => {});
});
