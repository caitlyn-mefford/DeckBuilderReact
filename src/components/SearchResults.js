import React from "react";

import "./SearchResults.css";

import Card from "./Card";

const SearchResults = ({ results, addCardToDeck, removeCardFromDeck }) => {
  return (
    <div id="results">
      <h3>Search Results ({results.length}):</h3>
      <div className="CardList">
        {results.map((result) => (
          <Card
            key={results.id}
            addCardToDeck={addCardToDeck}
            removeCardFromDeck={removeCardFromDeck}
            {...result}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;