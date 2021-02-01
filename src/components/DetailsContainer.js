import React from 'react'
import ProductView from './ProductView'
import ProductDetails from './ProductDetails'
import '../styles/DetailsContainer.css'

const DetailsContainer = (props) => {

    return (
        <div className="details-container">
            <ProductView />
            <ProductDetails />
        </div>
    )
}

export default DetailsContainer