import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import axios from 'axios'
const HomeScreen = () => {
    // use state take two things, what we want to call this state(products), and the function used to alter this state(setProducts)
    const [products, setProducts] = useState([]); // and what we want to set as default is passed in useState(); Empty array in thsi case.
    //useeffect and useState are hooks
    // whatver we put here in the useffect, runs as soon as the componenet loads
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }
        fetchProducts()
    }, []) // the second argument in useEffect are the dependencies i.e. if we want this function to fire off if anything changes, in this case it is empty
    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
