import React from 'react';
// import 'semantic-ui-css/semantic.min.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

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

  const [cartItems, setCartItems] = useState([])


  const handleAddProduct = (product) =>  {
    const productExist = cartItems.find((item) => item.id === product.id)

    if(productExist){
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...productExist, quantity: productExist.quantity + 1}: item))
    } else{
        setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }


  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id)

    if(productExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...productExist, quantity: productExist.quantity - 1} 
        : item)
      )
    }
  }

  return (
    <div>

      <Nav />
      <NavTwo />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='hotsandwiches' element={<HotSandwiches handleAddProduct={handleAddProduct}/>} />
        <Route path='coldsandwiches' element={<ColdSandwiches />} />
        <Route path='chickenmeals' element={<ChickenMeals />} />
        <Route path='chocolate' element={<Chocolate />} />
        <Route path='drinks' element={<Drinks />} />
        <Route path='fruitsnacks' element={<FruitSnacks />} />
        <Route path='saltysnacks' element={<SaltySnacks />} />
        <Route path='gumandmints' element={<GumandMints />} />
        <Route path='toiletries' element={<Toiletries />} />
        <Route path='cart' element={<Cart cartItems={cartItems} 
                          handleAddProduct={handleAddProduct}
                          handleRemoveProduct={handleRemoveProduct}/>} />
      </Routes>
    </div>
  );
}

export default App;

