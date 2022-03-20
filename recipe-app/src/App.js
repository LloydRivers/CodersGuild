import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
const AppID = process.env.REACT_APP_APPID;
const AppKey = process.env.REACT_APP_APPKEY;
// test commit

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");

  const url = ` https://api.edamam.com/search?q=${search}&app_id=${AppID}&app_key=${AppKey}`;

  console.log(search);
  useEffect(() => {
    axios.get(url).then((response) => setRecipes(response.data.hits));
  }, [search]);

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} type="search" />
      <hr />
      <div className="container">
        <div className="row">
          {recipes.map((recipe, index) => {
            console.log(recipe);
            return (
              <div className="col-6 col-md-4">
                <Card
                  key={index}
                  image={recipe.recipe.image}
                  healthLabels={recipe.recipe.healthLabels}
                  label={recipe.recipe.label}
                  ingredientLines={recipe.recipe.ingredientLines}
                  cuisineType={recipe.recipe.cuisineType[0]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
