import React from 'react';
// import 'semantic-ui-css/semantic.min.css'
import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav';
import NavTwo from './components/NavTwo';
import HotSandwiches from './pages/HotSandwiches';
import Home from './pages/Home';
import ColdSandwiches from './pages/ColdSandwiches';
import ChickenMeals from './pages/ChickenMeals';
import Chocolate from './pages/Chocolate';
import Drinks from './pages/Drinks';
import FruitSnacks from './pages/FruitSnacks';
import SaltySnacks from './pages/SaltySnacks';
import GumandMints from './pages/GumandMints';
import Toiletries from './pages/Toiletries';
import Cart from './components/Cart';

const App = () => {
  return (
    <div>

      <Nav />
      <NavTwo />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='hotsandwiches' element={<HotSandwiches />} />
        <Route path='coldsandwiches' element={<ColdSandwiches />} />
        <Route path='chickenmeals' element={<ChickenMeals />} />
        <Route path='chocolate' element={<Chocolate />} />
        <Route path='drinks' element={<Drinks />} />
        <Route path='fruitsnacks' element={<FruitSnacks />} />
        <Route path='saltysnacks' element={<SaltySnacks />} />
        <Route path='gumandmints' element={<GumandMints />} />
        <Route path='toiletries' element={<Toiletries />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

