import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import PropTypes from 'prop-types'

// using Link you can replace the a tag so the page does not reload
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <Card>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'> <strong>{product.name}</strong> </Card.Title>
                </Link>

            </Card.Body>
            <Card.Text>
                <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`} />
            </Card.Text>
            <Card.Text as='h3'> ${product.price}</Card.Text>

        </Card>


    )
}
Rating.defaultProps = {
    color: '#f8e825'    // this is the default color for the rating component */
}
Rating.PropTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}
export default Product
