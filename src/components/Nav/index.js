import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'; 
import axios from 'axios';
import { Input, Menu } from 'semantic-ui-react'

import './Navstyle.css'


const Nav = ( {cartItems} ) => {

    const navigate = useNavigate()

    const handleItemClick = (target) => {
        navigate("/" + target);
    }

    return (
        <div>
            <Menu pointing>
                <Menu.Item header
                    name='The Ockkyy Way'
                    onClick={()=> handleItemClick("")}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...'/>
                    </Menu.Item>
                    <Menu.Item>
                         <Input icon='shopping cart'
                        //  How to get it to change each time an item is added from the cart page? 
                         placeholder={cartItems.length + " Different items in Cart" } 
                         onClick={()=> handleItemClick("cart")}
                         />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    );
}

export default Nav;
