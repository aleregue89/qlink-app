import React from 'react'
import '../styles/Shop.css'
import Welcome from './Welcome'
//import Own from './Own'
//import Products from './Products'
import ProductsContainer from './ProductsContainer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Shop = (props) => {

    return (
        <Container>
            <Row>
                <Col lg={true}>
                    <p>Shop</p>
                </Col>
                <Col lg={true} style={{alignSelf: "flex-start"}}></Col>
            </Row>
            <Row>
                <Col sm>
                    <Welcome />
                    <ProductsContainer />
                </Col>
            </Row>
        </Container>
        
        
    )
}

export default Shop