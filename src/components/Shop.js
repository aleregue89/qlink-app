import React from 'react'
import '../styles/Shop.css'
import Welcome from './Welcome'
//import Own from './Own'
//import Products from './Products'
import ProductsContainer from './ProductsContainer'

const Shop = () => {
    return (
        <div className="home">
            <div className="home-header">
                <p>Shop</p>
            </div>
            <div>
                <Welcome />
                <ProductsContainer />
            </div>

        </div>
        
        
    )
}

export default Shop