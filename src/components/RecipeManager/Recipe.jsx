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