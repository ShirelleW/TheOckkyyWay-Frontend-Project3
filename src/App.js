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


  const handleCartClearance = () => {
    setCartItems([])
  }

  return (
    <div>

      <Nav cartItems={cartItems}/>
      <NavTwo />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='hotsandwiches' element={<HotSandwiches handleAddProduct={handleAddProduct}/>} />
        <Route path='coldsandwiches' element={<ColdSandwiches handleAddProduct={handleAddProduct}/>} />
        <Route path='chickenmeals' element={<ChickenMeals handleAddProduct={handleAddProduct}/>} />
        <Route path='chocolate' element={<Chocolate handleAddProduct={handleAddProduct}/>} />
        <Route path='drinks' element={<Drinks handleAddProduct={handleAddProduct}/>} />
        <Route path='fruitsnacks' element={<FruitSnacks handleAddProduct={handleAddProduct}/>} />
        <Route path='saltysnacks' element={<SaltySnacks handleAddProduct={handleAddProduct}/>} />
        <Route path='gumandmints' element={<GumandMints handleAddProduct={handleAddProduct}/>} />
        <Route path='toiletries' element={<Toiletries handleAddProduct={handleAddProduct}/>} />
        <Route path='cart' element={<Cart cartItems={cartItems} 
                          handleAddProduct={handleAddProduct}
                          handleRemoveProduct={handleRemoveProduct}
                          handleCartClearance={handleCartClearance} />} />
      </Routes>
    </div>
  );
}

export default App;

