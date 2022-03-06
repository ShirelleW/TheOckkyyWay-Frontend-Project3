import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const Toiletries = ( {  handleAddProduct} ) => {

    const [toiletries, setToiletries] = useState([])

    const fetchToiletries = async () => {
        try {
            const res = await axios.get("http://localhost:8081/api/v1/alltoiletries")
            // console.log(res.data)
            setToiletries(res.data)
            console.log("test", toiletries)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchToiletries()
    }, [])



    return (
        <div>
            <h3 id="title">Toiletries</h3>
            <div className='content'>
                {
                    toiletries.map((item) => {
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

export default Toiletries;
