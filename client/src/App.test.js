import React from "react";
import {
  act,
  render,
  wait,
  fireEvent,
  screen
} from "@testing-library/react";
import App from "./App";

import { getPosts } from "./apiService.js";

jest.mock("./apiService");

const fakePosts = [
  { id: 1, title: "first post", body: "this is the body"},
  { id: 2, title: "second post", body: "this is the body" }
];

getPosts.mockResolvedValue(fakePosts);

describe("App", () => {
  it("loads the articles", async () => {
    const { container } = render(<App />);

    // expect(container.querySelector("p").innerHTML).toBe("Loading...");

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    expect(await screen.findByText("Loading...")).not.toBeInTheDocument();

    expect(screen.getByText("first post")).toBeInTheDocument();
    expect(screen.getByText("second post")).toBeInTheDocument();

    expect(getPosts).toHaveBeenCalledTimes(1);
  });

  it("allows searching for posts", async () => {
    render(<App />);

    expect(await screen.findAllByRole("article")).toHaveLength(fakePosts.length);

    fireEvent.change(screen.getByPlaceholderText("Search articles"), {target: {value: "second"}})

    expect(screen.queryByText("first post")).not.toBeInTheDocument();
    expect(screen.queryByText("second post")).toBeInTheDocument();

    expect(screen.getAllByRole("article")).toHaveLength(1);
  });

  it("shows a message when no posts match criteria", async () => {
    render(<App />);

    expect(await screen.findAllByRole("article")).toHaveLength(fakePosts.length);

    fireEvent.change(screen.getByLabelText("Search articles"), {target: {value: "no post matches this criteria"}})

    expect(screen.getByText("We couldn't find any articles!")).toBeInTheDocument();

    expect(screen.queryByText("first post")).not.toBeInTheDocument();
    expect(screen.queryByText("second post")).not.toBeInTheDocument();

    expect(screen.queryAllByRole("article")).toHaveLength(0);
  });
});
