import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import SearchBar from "./components/ui/SearchBar";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  const handleQuery = (input) => {
    setQuery(input);
  };

  return (
    <div className="container">
      <Header />
      <SearchBar handleQuery={handleQuery} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
