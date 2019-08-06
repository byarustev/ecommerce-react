import React from 'react';
import { Card , Col, Button} from 'react-bootstrap';
require('dotenv').config();
const API_URL= process.env.REACT_APP_API_URL;

const Product=({title, description, image, id, price, discounted_price})=>(
    <Col md={4} className="product-card">
        <Card >
            <Card.Img variant="top" src={`${API_URL}/images/products/${image}`} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {/* <Card.Text>
                        {description}
                    </Card.Text> */}
                    <div className="prices">
                        <span className="text-muted dicounted">{discounted_price}</span>
                        <span className="text-danger">{price}</span>
                    </div>
                    <div className="add-to-cart-sec">
                        <Button >Add to Cart</Button>
                    </div>
                </Card.Body>
                
        </Card>
    </Col>
)

export default Product;