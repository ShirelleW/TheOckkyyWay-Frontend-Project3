import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const Drinks = ( {handleAddProduct} ) => {

    const [drinks, setDrinks] = useState([])

    const fetchDrinks = async () => {
        try {
            const res = await axios.get("http://localhost:8081/api/v1/food/category/Drinks")
            // console.log(res.data)
            setDrinks(res.data)
            console.log("test", drinks)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchDrinks()
    }, [])



    return (
        <div>
            <h3 id="title">Drinks</h3>
            <div className='content'>
                {
                    drinks.map((item) => {
                        return (
                            <Card>
                                <Image id="image" src={item.image} wrapped ui={true} />
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header><br></br>
                                    <Card.Meta>{item.description}</Card.Meta><br></br>
                                    <Card.Description>
                                        {item.price}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='shopping cart' onClick={() => handleAddProduct(item)}/>
                                        Add To Cart
                                    </a>
                                </Card.Content>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Drinks;
