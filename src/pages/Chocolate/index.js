import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const Chocolate = ( {handleAddProduct} )  => {

    const [chocolate, setChocolate] = useState([])

    const fetchChocolate = async () => {
        try {
            const res = await axios.get("http://localhost:8081/api/v1/food/category/Chocolate")
            // console.log(res.data)
            setChocolate(res.data)
            console.log("test", chocolate)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchChocolate()
    }, [])



    return (
        <div>
            <h3 id="title">Chocolate</h3>
            <div className='content'>
                {
                    chocolate.map((item) => {
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

export default Chocolate;
