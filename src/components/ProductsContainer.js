import React from 'react'
import '../styles/ProductsContainer.css'
import Own from './Own'
import Products from './Products'

const ProductsContainer = () => {
    return (
        <div className="products-container">
            <Own />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
        </div>
    )
}

export default ProductsContainer