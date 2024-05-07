import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage/HomePage';
import HomeDecor from './pages/homedecor/HomeDecor';
import Jewellery from './pages/jewellery/Jewellery';
import FoodItems from './pages/fooditems/FoodItems';
import Clothes from './pages/clothes/Clothes';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/homedecor" element={<HomeDecor/>} />
        <Route path="/jewellery" element={<Jewellery/>} />
        <Route path="/fooditems" element={<FoodItems/>} />
        <Route path="/clothes" element={<Clothes/>} />
      </Routes>
    </Router>
  )
}

export default App