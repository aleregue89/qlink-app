import React from 'react'
import '../styles/ProductsContainer.css'
import Own from './Own'
import Products from './Products'
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
//import Welcome from './Welcome'

// importing hooks dependencies
import {useState, useEffect} from 'react'

// mock data in order to deal with products pic
const photos = {
    20425 : {
        productPic: 'byop.png',
        name: "SmartPhone"
    },
    22042: {
        productPic: 'poblano_vle5.png',
        Name: "Poblano VLE5"
    },
}

const ProductsContainer = (props) => {

    const [productsList, setProductsList] = useState([])

    // handle JSON data to display to UI
    const fetchProducts = async () => {
        const products = await fetch('http://localhost:5628/products')
            .then(res => res.json())
            console.log(products)

            products.map((product, index) => {
                product.imageURL = photos[product.ProductId] ? photos[product.ProductId].productPic : "quest5.png"
            })

            // updating state
            setProductsList(products)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
                <div className="container" style={{width: "62%"}}>
                    <div className="row">
                        {productsList.map((product, index) =>{
                            if(product.Name === 'SmartPhone') {
                                return (
                                    <Own key={index}/>
                                )
                            } return (
                                <Products key={index} 
                                        name={product.Name}
                                        price={product.Price}
                                        description={product.Description}
                                        id={product.ProductId}
                                        photo={product.imageURL}/>
                            )
                        })}
                    </div>
                    
                </div>
    )
}

export default ProductsContainer