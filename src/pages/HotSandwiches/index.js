import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './style.css'

const HotSandwiches = () => {

    const [hotSandwiches, setHotSandwiches] = useState([])

    const fetchHotSandwiches = async () => {
        try {
            const hotSands = await axios.get("http://localhost:8081/api/v1/food/category/Hot%20Sandwiches")
            // console.log(hotSands.data)
            setHotSandwiches(hotSands.data)
            console.log("test", hotSandwiches)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchHotSandwiches()
    }, [])



    return (
        <div>
            <h3 id="title">Hot Sanwhiches</h3>
            <div className='content'>
                {
                    hotSandwiches.map((item) => {
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

export default HotSandwiches;
