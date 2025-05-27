


const Sidebar = ({ cookTable, handleCurrentlyCooking, preparingItems }) => {
    
    return (
        <>
            <div className="border-2 border-gray-200 w-1/3 rounded-2xl">
                <div className="h-1/2">
                    <div >
                        <h3 className="text-2xl font-semibold m-5 p-2 mx-10 border-b-2 border-gray-200 text-center">Want to cook : {cookTable.length}</h3>
                    </div>
                    <div className="mx-2 my-5">
                        <table className="w-full table-auto text-center ">
                            <thead>
                                <tr>
                                    <td className="w-5"></td>
                                    <td className="font-bold text-xl text-gray-600 ">Name</td>
                                    <td className="font-bold text-xl text-gray-600 ">Time</td>
                                    <td className="font-bold text-xl text-gray-600 ">Calories</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cookTable.map((item, index) => (
                                        <tr id="recipe-item" className="" key={item.recipe_id}>
                                            <td>{index + 1}</td>
                                            <td className="text-md text-gray-500 w-30 h-30">{item.recipe_name}</td>
                                            <td className="text-md text-gray-500 w-30">{item.preparing_time}</td>
                                            <td className="text-md text-gray-500 w-30">{item.calories}</td>
                                            <td><button onClick={() => handleCurrentlyCooking(item)} className="btn  bg-emerald-400 border-none">Preparing</button></td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="h-1/2">
                    <div className="">
                        <h3 className="text-2xl font-semibold m-5 p-2 mx-10 border-b-2 border-gray-200 text-center">Currently Cooking : {preparingItems.length}</h3>
                    </div>
                    <div className="mx-2 my-5">
                        <table className="w-full table-auto text-center ">
                            <thead>
                                <tr>
                                    <td className="w-5"></td>
                                    <td className="font-bold text-xl text-gray-600 ">Name</td>
                                    <td className="font-bold text-xl text-gray-600 ">Time</td>
                                    <td className="font-bold text-xl text-gray-600 ">Calories</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    preparingItems.map((value, index) => (
                                        <tr key={value.recipe_id}>
                                            <td>{index + 1}</td>
                                            <td className="text-md text-gray-500 w-30 h-30">{value.recipe_name}</td>
                                            <td className="text-md text-gray-500 w-30">{value.preparing_time}</td>
                                            <td className="text-md text-gray-500 w-30">{value.calories}</td>

                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Sidebar;