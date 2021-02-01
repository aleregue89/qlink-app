import React from 'react'
import '../styles/Products.css'
import Button from 'react-bootstrap/Button'
//import getPhotos from '../utils/MockData'
import Image from 'react-bootstrap/Image'
import history from './history'

const Products = (props) => {

    // declaring variables
    let leasing = "$10.15/mo"

    return (
        
        <div className="col-lg-4 col-md-6 col-12" style={{padding: "10px"}}>
            <div style={{borderRadius: "5px", border: "1px solid lightgray", padding: "10px"}}>
                <div style={{marginTop: "25px"}}>
                    <Image src={props.photo} />
                </div>
                
                <div className="product-brand">
                    <p className="brand">{props.description.split(' ')[0]}</p>
                    <h3 style={{fontSize: "15px"}}>{props.name}</h3>
                </div>

                <div className="colors-contain">
                    <div className="circle" style={{backgroundColor: "black"}}></div>
                    <div className="circle" style={{backgroundColor: "beige",  marginLeft: "15px"}}></div>
                    <div className="circle" style={{backgroundColor: "white", marginLeft: "15px", border: "1px solid black"}}></div>
                </div>

                <div className="content"> 
                    <div className="phone-price" id="price-leasing">
                        <p className="price">${props.price}</p>
                    </div>
                    <div className="line">
                        
                    </div>
                    <div className="financial-price">
                        <p className="financial">{leasing}</p>
                        <p className="leasing-period">for 24 mo.</p>
                    </div>
                </div>

                <Button className="btn-action-products" variant="primary" size="md" block style={{backgroundColor: "white", color: "dodgerblue", 
                        fontSize: "10px"}} onClick={() => history.push('/details')}>
                        View Details
                </Button>
            </div>
            
        </div>
        
    ) 
}

export default Products