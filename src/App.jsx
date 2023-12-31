// import cocktailLogo from "./assets/cocktail.svg";
import { useState, useEffect } from "react";
import ProductSection from "./components/productSection";
import ProductList from "./components/productList";
import CocktailFilter from "./components/CocktailFilter";
import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("");

  const onRender = () => {
    return (
      <div className="App">
        {productSection ? (
          <ProductSection
            productSection={productSection}
            setProductSection={setProductSection}
          />
        ) : (
          <>
            <ProductList name="rum" setProductSection={setProductSection} />
            <ProductList name="vodka" setProductSection={setProductSection} />
            <ProductList name="gin" setProductSection={setProductSection} />
          </>
        )}
      </div>
    );
  };
  return (
    <div className="AppHeader">
      <ul>
        <li onClick={() => setProductSection("")}>Home</li>
        <li onClick={() => setProductSection("")}>Contacts</li>
      </ul>
      <CocktailFilter />

      {onRender()}
    </div>
  );
}
export default App;
