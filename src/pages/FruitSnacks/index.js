import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const FruitSnacks = () => {

    const [fruitsnacks, setFruitSnacks] = useState([])

    const fetchFruitSnacks = async () => {
        try {
            const res = await axios.get("http://localhost:8081/api/v1/food/category/Fruit%20Snacks")
            // console.log(res.data)
            setFruitSnacks(res.data)
            console.log("test", fruitsnacks)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchFruitSnacks()
    }, [])



    return (
        <div>
            <h3 id="title">Fruit Snacks</h3>
            <div className='content'>
                {
                    fruitsnacks.map((item) => {
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

export default FruitSnacks;
