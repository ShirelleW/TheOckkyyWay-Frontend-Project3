import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'

import './Navstyle.css'


const Nav = () => {

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
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item>
                         <Input icon='shopping cart'
                         placeholder="Items in Cart"
                         onClick={()=> handleItemClick("cart")}
                         />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    );
}

export default Nav;
