import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, color } from 'react-bootstrap'
import Rating from '../Components/Rating'
import axios from 'axios'


export const ProductScreen = ({ match }) => {
    // we need to find the product object according to the url
    // params after : are stored in match.params
    const [product, setProduct] = useState({}); // and what we want to set as default is passed in useState(); Empty array in thsi case.
    //useeffect and useState are hooks
    // whatver we put here in the useffect, runs as soon as the componenet loads
    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)

            setProduct(data)
        }
        fetchProduct()
    }, [])

    return (
        <>
            <Link className='btn btn-light my-3'>
                Go back
            </Link>
            <Row>
                <Col md={6}>
                    {
                    /* fluid keeps the image inside the container */}
                    <Image src={product.image} fluid></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product.description}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price} </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? <span style={{ color: 'green' }}>In stock</span> : <span style={{ color: 'red' }}>Out of stock</span>}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={product.countInStock < 1}>
                                    ADD TO CART
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
