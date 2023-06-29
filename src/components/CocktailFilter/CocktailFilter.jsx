import React, { useState, useEffect } from "react";
import "./cocktailFilter.css";
// import { GET } from "../../utils/http.js";

const CocktailFilter = () => {
  const [cocktails, setCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name)
      .then((res) => res.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

  useEffect(() => {
    const filtered = cocktails.filter((cocktail) =>
      cocktail.name().includes(searchTerm())
    );
    setFilteredCocktails(filtered);
  }, [searchTerm, cocktails]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca cocktail"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <input type="submit" value="invia" />
      <ul>
        {filteredCocktails.map((cocktail) => (
          <li key={cocktail.id}>{cocktail.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default CocktailFilter;
