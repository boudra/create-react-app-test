
test("getUser controller", () => {
  const userModel = {
    find: (id) => {
      return {username: "Rick"};
    }
  };

  expect(getUser(userModel, req, res)).response.toBe({username: "Rick"});
});
