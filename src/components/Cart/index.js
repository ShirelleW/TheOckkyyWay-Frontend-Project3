import React from 'react';

const Cart = ( {cartItems, handleAddProduct, handleRemoveProduct} ) => {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
    return (
        <div className='cart-items'>
            <div className='cart-items-header'>Cart Items</div>
        
        {cartItems.length === 0 && (<div className='cart-items-empty'> No items added. </div>)}

        <div>
            {cartItems.map((item)=> (
                <div key={item.id} className="cart-items-list">
                    <img className="cart-items-images"src={item.image} alt={item.name}/>
                    <h3>{item.name}</h3>
                    <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                    <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
                    <div className='cart-items-price'> {item.quantity} * {item.price} </div>
                </div>
            ))}

            <div className='display-total-price'> Total Price: ${totalPrice}</div>
        </div>



        </div>
    );
} 

export default Cart;
