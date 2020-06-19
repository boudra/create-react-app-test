import React, { useEffect, useState } from "react";
import "./App.scss";

import { getPosts } from "./apiService.js";

function App({ id }) {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(id).then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Articles</h1>
        {posts.length === 0 && <p>There are no posts</p>}
        <div className="articles">
          {posts.map((post) => (
            <div className="article" key={post.id}>
              <div className="article-title">{post.title}</div>
              <div className="article-body">{post.body}</div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
