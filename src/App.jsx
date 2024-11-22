import { Routes, Route } from "react-router-dom";

import Home from './components/Home/Home'
import Contact from './components/MenuSection/ContactSecation/Contact'
import FoodDrinks from './components/MenuSection/Food&Drinks/FoodDrinks'
import PrivateEvents from './components/MenuSection/PrivateEvents/PrivateEvents'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/food&drinks" element={<FoodDrinks />} />
        <Route path="/privateevents" element={<PrivateEvents />} />
      </Routes>
    </>
  )
}

export default App