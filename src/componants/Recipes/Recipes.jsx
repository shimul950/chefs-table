import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleCookTable}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <>
            <div className="grid grid-cols-2 gap-10 w-2/3">
                {
                    recipes.map((recipe,idx) => <Recipe
                        key={idx}
                         recipe={recipe}
                         handleCookTable={handleCookTable}
                    ></Recipe>)
                }
            </div>

        </>
    );
};

export default Recipes;