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
      <header className="app-header">
        <h1>Articles</h1>
      </header>
      <main>
      {posts.length === 0 && <p>There are no posts</p>}
        <div className="articles">
          {posts.map((post) => (
            <div className="article" key={post.id} role="article">
              <div className="article-title">{post.title}</div>
              <div className="article-body">{post.body}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
