import React from 'react';
import './cartstyle.css'

const Cart = ( {cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance} ) => {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
    return (
        <div className='cart-items'>
            <h2 className='cart-items-header'>Cart Items</h2>
            <div className='clear-cart'>
                {
                    cartItems.length >= 1 && (
                        <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
                    )
                }
            </div>
        
            <div className='display-total-price'> Total Price: ${totalPrice}</div><br></br><br></br>
        {cartItems.length === 0 && (<div className='cart-items-empty'> No items added. </div>)}

        <div className="cart-items-list">
            {cartItems.map((item)=> (
                <div key={item.id}>
                    <img className="cart-items-images"src={item.image} alt={item.name}/>
                    <h3>{item.name}</h3>
                    <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                    <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
                    <div className='cart-items-price'> {item.quantity} * {item.price} </div>
                </div>
            ))}
        </div>



        </div>
    );
} 

export default Cart;
