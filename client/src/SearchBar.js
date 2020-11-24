import React from "react";

import "./SearchBar.scss";

export default function SearchBar({ query, onChange }) {
  return (
    <form role="search" className="SearchBar" onSubmit={e => e.preventDefault()}>
      <label htmlFor="search-bar">Search articles</label>
      <input
        id="search-bar"
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value, e)}
      />
    </form>
  );
}
