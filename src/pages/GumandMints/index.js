import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const GumandMints = ( {handleAddProduct} ) => {

    const [gumandmints, setGumandMints] = useState([])

    const fetchGumandMints = async () => {
        try {
            const res = await axios.get("http://localhost:8081/api/v1/food/category/Gum%20&%20Mints")
            // console.log(res.data)
            setGumandMints(res.data)
            console.log("test", gumandmints)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchGumandMints()
    }, [])



    return (
        <div>
            <h3 id="title">Gum & Mints</h3>
            <div className='content'>
                {
                    gumandmints.map((item) => {
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

export default GumandMints;
