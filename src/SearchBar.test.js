import React from "react";
import {
  act,
  render,
  wait,
  fireEvent,
  screen
} from "@testing-library/react";

import SearchBar from "./SearchBar";

describe("SearchBar", () => {

  it("displays the right value", () => {
    render(<SearchBar query={"the meaning of life"} onChange={null} />);

    expect(screen.getByDisplayValue("the meaning of life")).toBeInTheDocument();
  });

  it("calls back when value changes", () => {
    const onChange = jest.fn();

    render(<SearchBar onChange={onChange} query="" />);

    fireEvent.change(screen.getByLabelText("Search articles"), {target: {value: "searching for something"}});

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("searching for something", expect.anything());

  });
});
