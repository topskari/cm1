import React, { useState } from "react";
import "./RecipeManager.css"
import Recipe from "./Recipe";

const RecipeManager = () => {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value);
  }

  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  }

  const addRecipe = () => {
    if (name.trim() !== "" && ingredients.length !== 0 && instructions.length !== 0) {
      setRecipes((r) => [...r, { name, ingredients, instructions }]);
      setName("");
      setIngredients("");
      setInstructions("");
    }
  }

  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  }

  return (
    <div className="recipe-collection" id="recipemanager">
      <h1>Recipe Collection Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter recipe name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Enter ingredients separated by commas"
          value={ingredients}
          onChange={handleIngredientsChange}
          id="longer-input"
        />
        <ul>
          {ingredients.split(',')
            .map(item => item.trim())
            .filter(item => item !== "")
            .map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        <input
          type="text"
          placeholder="Enter numerated instructions (e.g. 1. Boil water 2. Add salt)"
          value={instructions}
          onChange={handleInstructionsChange}
          id="longer-input"
        />
        <ul>
          {instructions.split(/\d+\.\s*/)
            .map(item => item.trim())
            .filter(item => item !== "")
            .map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        <button onClick={addRecipe}>Add Recipe</button>
      </div>
      <ol>
        {recipes.map((recipe, index) => (
          <li>
            <div className="recipe">
              <Recipe {...recipe} key={index} />
              <button onClick={() => deleteRecipe(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeManager;