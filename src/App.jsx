
import './App.css'
import Header from './componants/Header/Header'
import Navbar from './componants/navbar/navbar'
import Recipes from './componants/Recipes/Recipes'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <div>
        <Recipes></Recipes>
      </div>
    </>
  )
}

export default App
