import "./App.scss";

import React, { useEffect, useMemo, useState } from "react";

import { getPosts } from "./apiService.js";
import SearchBar from "./SearchBar.js";
import Header from "./Header.js";

function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.includes(searchQuery) || post.body.includes(searchQuery)
    );
  }, [posts, searchQuery]);

  function viewPosts() {
    return (
      <main>
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
        {filteredPosts.length === 0 && (
          <div className="warning">We couldn't find any articles!</div>
        )}
        <div className="articles">
          {filteredPosts.map((post) => (
            <div className="article" key={post.id} role="article">
              <div className="article-title">{post.title}</div>
              <div className="article-body">{post.body}</div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <div className="App">
      <Header/>
      {loading ? <p>Loading...</p> : viewPosts()}
    </div>
  );
}

export default App;
