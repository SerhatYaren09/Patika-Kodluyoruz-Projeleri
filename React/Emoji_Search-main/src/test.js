import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("<App/>", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders header successfully", () => {
    const headerTitle = screen.getByText(/Emoji Search/i);
    expect(headerTitle).toBeInTheDocument();
  });

  test("renders all emojies", () => {
    const items = render(<App />).queryAllByTestId("item");
    console.log(items.length);
    console.log(items);
    expect(items.length).toEqual(40);
  });

  test("renders a filtered emoji by search", () => {
    const input = screen.getByTestId("input-text");
    const result = screen.getByText("Relaxed");
    console.log(result);
    userEvent.type(input, "relax");
    expect(result).toBeInTheDocument();
  });

  test("copies emoji by clicking 'Click to copy emoji'", () => {
    const emoji = screen.getByText("100").textContent;
    const copyClick = screen.getByText("100");
    userEvent.click(copyClick);
    expect(copyClick).toHaveTextContent(emoji);
  });
});