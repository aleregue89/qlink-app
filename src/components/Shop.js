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


/*
<Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
</Container>


<div className="home">
            <div className="home-header">
                <p>Shop</p>
            </div>
            <div className="shop-container">
                <Welcome />
                <ProductsContainer />
            </div>

        </div>


*/