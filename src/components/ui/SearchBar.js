import React, { useState } from "react";

function SearchBar({ handleQuery }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
    handleQuery(input);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={input}
        placeholder="Enter input here..."
        onChange={handleInput}
        autoFocus
      />
    </div>
  );
}

export default SearchBar;
