import { RiFireLine } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
const Recipe = ({recipe , handleCookTable}) => {
    const{recipe_name,image_url,short_description,ingredients,preparing_time,calories}=recipe;
    return (
        <div className="w-100 border-2 border-gray-200 p-5 rounded-xl">
            <img className="rounded-xl" src={image_url} alt="" />
            <div>
                <div className="py-5 my-5 border-b-2 border-gray-200">
                    <h3 className="text-2xl font-semibold text-gray-700">{recipe_name}</h3>
                    <p className="text-sm text-gray-400">{short_description}</p>
                </div>
                <div className="border-b-2 border-gray-200 pb-5 mb-5">
                    <h3 className="text-xl font-semibold text-gray-700">Ingredients : {ingredients.length}</h3>
                    <ul className="text-gray-400">
                        {
                            ingredients.map(ingredient => <li>{ingredient}</li>)
                        }
                    </ul>

                </div>
                <div className="flex justify-between">
                    <h3 className="text-sm text-gray-400 flex items-center gap-2"><CiClock2/>{preparing_time}</h3>
                    <h3 className="text-sm text-gray-400 flex items-center gap-2"><RiFireLine/>{calories}</h3>
                </div>
                <button onClick={() =>handleCookTable(recipe)} className="btn  bg-emerald-400 border-none my-5">Want to cook</button>

            </div>
        </div>
    );
};

export default Recipe;