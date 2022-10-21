import React, { useState, useEffect } from "react";

function Search({ applySearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    applySearch(query);
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value={query}
      />
    </div>
  );
}

export default Search;
