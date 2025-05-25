import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">Our Recipes</h1>
            <p className="text-gray-300 text-xl">Explore easy, healthy recipes with full calorie info. <br />Perfect for smart eating and delicious results.</p>
            {
                recipes.map(recipe=><Recipe recipe={recipe}></Recipe>)

            }
        </div>
        
    );
};

export default Recipes;