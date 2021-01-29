import React from 'react'
import '../styles/ProductsContainer.css'
import Own from './Own'
import Products from './Products'

// importing hooks dependencies
import {useState, useEffect} from 'react'

const ProductsContainer = (props) => {

    const [productsList, setProductsList] = useState([])

    // handle JSON data to display to UI
    const fetchProducts = async () => {
        const products = await fetch('http://localhost:5628/products')
            .then(res => res.json())

            // updating state
            setProductsList(products)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="products-container">
            {productsList.map((product, index) =>{
                if(product.Name === 'SmartPhone') {
                    return (
                        <Own key={index}/>
                    )
                } return (
                    <Products key={index} 
                              name={product.Name}
                              price={product.Price}
                              description={product.Description}/>
                )
            })}
        </div>
    )
}

export default ProductsContainer