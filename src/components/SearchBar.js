import React, { useState } from "react";

import { fetchCards } from "../api";

const SearchBar = ({ setResults }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const HandleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const cards = await fetchCards({
      name,
      text,
    });

    setResults(cards);
  }

  return (
    <div id="search">
      <h3>Search cards here ↓</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="card name"
          value={name}
          onChange={HandleNameChange}
        />
        <input
          type="text"
          placeholder="card text"
          value={text}
          onChange={handleTextChange}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;