import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';


import './navTwostyle.css'
import { useNavigate } from 'react-router-dom'

// pages
import HotSandwiches from '../../pages/HotSandwiches';

const NavTwo = () => {

    // const history = useHistory()

    // const handleItemClick = (event) => {
    //     history.push(event.link);
    // }

    const navigate = useNavigate()
    
     const handleItemClick = (target) => {
        navigate("/" + target);
    }

    return (
        <div className="" id="navTwoItems">
            <Menu horizontal secondary pointing fluid widths={6}>
                <Menu.Item
                    name="Hot Sandwiches"
                    onClick={()=> handleItemClick("hotsandwiches")} />
                <Menu.Item
                    name="Cold Sandwiches"
                    onClick={()=> handleItemClick("coldsandwiches")}
                />
                <Menu.Item
                     name="Chicken Meals"
                     onClick={()=> handleItemClick("chickenmeals")}
                />
                <Menu.Item
                     name="Drinks"
                     onClick={()=> handleItemClick("drinks")}
                />
                <Dropdown item text='Snacks'>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={()=> handleItemClick("chocolate")}
                        >Chocolate</Dropdown.Item>
                        <Dropdown.Item
                            onClick={()=> handleItemClick("fruitsnacks")}
                        >Fruit Snacks</Dropdown.Item>
                        <Dropdown.Item
                            onClick={()=> handleItemClick("saltysnacks")}
                        >Salty Snacks</Dropdown.Item>
                        <Dropdown.Item
                            onClick={()=> handleItemClick("gumandmints")}
                        >Gum & Mints</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>Toiletries</Menu.Item>
            </Menu>
        </div>
    );
}

export default NavTwo;
