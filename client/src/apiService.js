let apiEndpoint = "https://jsonplaceholder.typicode.com";

export function getPosts() {
  return fetch(`${apiEndpoint}/posts`).then((response) => response.json());
}
