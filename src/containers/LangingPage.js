import React from 'react';
import {Col, Carousel, Row} from 'react-bootstrap';
import ProductsContainer from './productsContainer';

class LandingPage extends React.Component{

    render(){
        return(
            <Col md={9}>
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                <ProductsContainer 
                    page={1}
                    limit={12}
                    description_length={65}
                />
                </Row>
            </Col>
        )
    }
}

export default LandingPage;