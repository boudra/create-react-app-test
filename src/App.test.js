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

test("it renders posts", async () => {
  let fakePosts = [
    { id: 1, title: "first post" },
    { id: 2, title: "second post" }
  ];

  getPosts.mockResolvedValue(fakePosts);

  const { getByText, getBy, queryByText } = render(<App />);

  expect(getByText("There are no posts")).toBeInTheDocument();

  // await waitForElementToBeRemoved(() => queryByText("There are no posts"));
  //
  // fakePosts.forEach((post) => {
  //   expect(getByText(post.title)).toBeInTheDocument();
  // });

  await wait(() => expect(screen.getByText("first post")).toBeInTheDocument());
  await wait(() => expect(screen.getByText("second post")).toBeInTheDocument());

  expect(getPosts).toHaveBeenCalledTimes(1);
});
