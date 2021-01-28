import React from 'react'
import '../styles/Products.css'

const Products = () => {
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
                <p className="brand">hp</p>
                <h3>Model</h3>
            </div>
            <div className="content">
                <div className="colors">
                    <span className="dot" style={{backgroundColor: "black", border: " 0.05px solid black"}}></span>
                    <span className="dot" style={{backgroundColor: "wheat", border: " 0.05px solid wheat"}}></span>
                    <span className="dot" style={{backgroundColor: "white", border: " 0.05px solid black"}}></span>
                </div>
                <div className="phone-price">
                    <p className="price">$69.95/mo</p>
                    <p className="financial">leasing <span>for 24 mos</span></p>
                </div>
            </div>
            <button>View Detail</button>
        </div>
    ) 
}

export default Products