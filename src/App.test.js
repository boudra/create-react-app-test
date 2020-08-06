import React from "react";
import {
  act,
  render,
  wait,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  screen
} from "@testing-library/react";
import App from "./App";

import { getPosts } from "./apiService.js";

jest.mock("./apiService");

describe("App", () => {
  const fakePosts = [
    { id: 1, title: "first post" },
    { id: 2, title: "second post" }
  ];

  getPosts.mockResolvedValue(fakePosts);

  it("renders posts", async () => {
    render(<App />);

    expect(screen.getByText("There are no posts")).toBeInTheDocument();

    expect(await screen.findByText("There are no posts")).not.toBeInTheDocument();

    fakePosts.reduce((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });

    expect(screen.getAllByRole("article")).toHaveLength(fakePosts.length);

    expect(getPosts).toHaveBeenCalledTimes(1);
  });
});
