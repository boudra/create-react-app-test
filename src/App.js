import React, {useEffect, useState} from 'react';
import './App.css';

import {getPosts} from "./apiService.js"

function App({id}) {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(id).then(posts => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://placehold.it/400x400" alt="" />
        {posts.length === 0 && <p>There are no posts</p>}
        {posts.map(post => <p key={post.id}>{post.title}</p>)}
        <h1>Hello world</h1>
      </header>
    </div>
  );
}

export default App;
