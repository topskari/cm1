# Maria's Self-Assessment of Code


## RecipeManager

```js
// RecipeManager.jsx - state initialization
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
}
```

**Assessment**: 
- The state initialization and the event handlers are clear and appropriate.
- The `addRecipe` function has basic validation to ensure empty strings or fields with zero length are not added, which helps prevent empty entries.


```js
// RecipeManager.jsx - rendering logic
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
```

**Assessment**: 
- The rendering logic is comprehensive and clearly lays out the components.
- Real-time parsing and display of `ingredients` and `instructions` as lists improve user feedback and understanding.
- The use of `map` to render the list of contacts is efficient and follows React best practices.
- The `button` elements are correctly set up to handle adding and deleting recipes.
- The component maps over `recipes` to render each one with a `Recipe` component and a delete button, maintaining a clear structure.

## Recipe.jsx

```js
// Recipe.jsx - Recipe component
const Recipe = ({ name, ingredients, instructions }) => {
    return (
        <div>
            <h2>{name}</h2>
            <div>
                <h3>Ingredients:</h3>
                <ul>
                    {ingredients.split(',')
                        .map((ingredient, index) => (
                            <li key={index}>{ingredient.trim()}</li>
                        ))}
                </ul>
            </div>
            <div>
                <h3>Instructions:</h3>
                <ul>
                    {instructions.split(/\d+\.\s*/)
                        .map((instruction, index) => instruction.trim())
                        .filter(instruction => instruction !== "")
                        .map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Recipe;
```

**Assessment**: 
- The `Recipe` component is well-defined as a standalone functional component.
- The code to split and map `instructions` and `ingredients` helps with readability, but it is repeated which is an area of improvement in the code.

This assessment was made with the help of ChatGPT.