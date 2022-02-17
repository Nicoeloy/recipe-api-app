import React, { useEffect, useState } from "react";
import Recipes from "./components/recipes_list";
import './App.css';



const App = () => {
  const API_KEY = "fe7b957d6f47d15aff0cc464eb324c64";
  const APP_ID = "0d16ece7";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  // eslint-disable-next-line
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            search
          </button>
        </form>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            time={recipe.recipe.totalTime}
            />
          ))}
        </div>
      </div>
    );
  };


export default App;
