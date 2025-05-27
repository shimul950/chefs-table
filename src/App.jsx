
import { useState } from 'react'
import './App.css'
import Header from './componants/Header/Header'
import Navbar from './componants/navbar/navbar'
import Recipes from './componants/Recipes/Recipes'
import Sidebar from './componants/SideBar/Sidebar'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [cookTable, setCookTable] = useState([])
  const handleCookTable = recipe => {
    setCookTable(data => {
      if (cookTable.includes(recipe)) {
        toast.error('Item already added !')
        return data;
      }
      else {
        toast.success('Item added')
        return [...cookTable, recipe];
      }
    })
  }

  // handle preparing btn

  const [preparingItems, setPreparingItems] = useState([])
  const handleCurrentlyCooking = preparingItem => {
    const recipeItem = document.getElementById('recipe-item');
    recipeItem.classList.add('hidden')
    setPreparingItems([...preparingItems,preparingItem])
  }

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Toaster position="top-center" />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our Recipes</h1>
        <p className="text-gray-300 text-xl">Explore easy, healthy recipes with full calorie info. <br />Perfect for smart eating and delicious results.</p>
      </div>
      <div className='flex'>
        <Recipes handleCookTable={handleCookTable}></Recipes>
        <Sidebar
          cookTable={cookTable}
          handleCurrentlyCooking={handleCurrentlyCooking}
          preparingItems={preparingItems}
        ></Sidebar>

      </div>
    </>
  )
}

export default App
