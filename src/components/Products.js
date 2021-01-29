import React from 'react'
import '../styles/Products.css'
import Button from 'react-bootstrap/Button'

const Products = (props) => {

    return (
        <div className="container">
            <img
                width={120}
                height={120}
                className="picture"
                src="byop.png"
                alt="Generic placeholder"
            />
            <div className="product-brand">
                <p className="brand">{props.description.split(' ')[0]}</p>
                <h3>{props.name}</h3>
            </div>
            <div className="content">  
                <div className="phone-price">
                    <p className="price">${props.price}</p>
                    <p className="financial">leasing <span>for 24 mos</span></p>
                </div>
            </div>
            <Button className="btn-action-products" variant="primary" size="lg" block>
                    View Details
            </Button>
        </div>
    ) 
}

export default Products


/*
<div className="colors">
                    <span className="dot" style={{backgroundColor: "black", border: " 0.05px solid black"}}></span>
                    <span className="dot" style={{backgroundColor: "wheat", border: " 0.05px solid wheat"}}></span>
                    <span className="dot" style={{backgroundColor: "white", border: " 0.05px solid black"}}></span>
                </div>

*/