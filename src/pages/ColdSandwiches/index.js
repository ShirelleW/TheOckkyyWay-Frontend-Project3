import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const ColdSandwiches = ( {handleAddProduct} ) => {

    const [coldSandwiches, setColdSandwiches] = useState([])

    const fetchColdSandwiches = async () => {
        try {
            const coldSands = await axios.get("http://localhost:8081/api/v1/food/category/Cold%20Sandwiches")
            // console.log(hotSands.data)
            setColdSandwiches(coldSands.data)
            console.log("test", coldSandwiches)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchColdSandwiches()
    }, [])



    return (
        <div>
            <h3 id="title">Cold Sanwhiches</h3>
            <div className='content'>
                {
                    coldSandwiches.map((item) => {
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

export default ColdSandwiches;
