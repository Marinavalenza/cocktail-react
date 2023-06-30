import React, { useState, useEffect } from "react";

function CocktailSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCocktails(data.drinks || []);
        });
    } else {
      setCocktails([]);
    }
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.elements.search.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="Inserisci un cocktail" />
        <input type="submit" value="Cerca" />
      </form>

      {cocktails.length > 0 ? (
        <ul>
          {cocktails.map((cocktail) => (
            <li key={cocktail.idDrink}>
              <button onClick={() => alert(cocktail.strDrink)}>
                {cocktail.strDrink}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nessun cocktail trovato.</p>
      )}
    </div>
  );
}

export default CocktailSearch;
