import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const ChickenMeals = () => {

    const [chickenMeals, setChickenMeals] = useState([])

    const fetchChickenMeals = async () => {
        try {
            const res = await axios.get("http://localhost:8081/api/v1/food/category/Chicken%20Meals")
            // console.log(hotSands.data)
            setChickenMeals(res.data)
            console.log("test", chickenMeals)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchChickenMeals()
    }, [])



    return (
        <div>
            <h3 id="title">Chicken Meals</h3>
            <div className='content'>
                {
                    chickenMeals.map((item) => {
                        return (
                            <Card>
                                <Image id="image" src={item.image} wrapped ui={true} />
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Meta>{item.price}</Card.Meta>
                                    <Card.Description>
                                        {item.description}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='shopping cart' />
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

export default ChickenMeals;
