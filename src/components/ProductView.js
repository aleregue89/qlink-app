import React from 'react'
import '../styles/ProductView.css' 
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import {BoxSeam, Sim} from 'react-bootstrap-icons'
import Image from 'react-bootstrap/Image'


// importing hooks dependencies
import {useState, useEffect} from 'react'

const ProductView = (props) => {

    const [radioValue, setRadioValue] = useState('');
    
    const handleClick = (e) => {
        setRadioValue(e.target.value)
    }

    // SMARTPAY - concatenation
    const smart = "SMART"
    const pay = "PAY"

    return (
        <div className="productview-container">
            <div className="productview-photo" style={{border: "1px solid orange"}}>
                <Image style={{marginBottom: "50px"}} src="iphone_xs_max.png"  />
            </div>
            
            <div className="productview-options" style={{border: "1px solid blue"}}>
                <div>
                    <p className="brand" style={{marginTop: "30px"}}>Apple</p>
                    <h3 className="text-own" style={{fontSize: "8px"}}>iPhone XS MAX</h3>
                    <p className="class1">Get exactly what you need with the performance and reliability
                                           of this phone, which comes with a 5.8-inch edge to edge infinty
                                           Display</p>

                    <div className="boostrap-icons" style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                        <div className="bootstrap-icons-boxseam" style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                            <BoxSeam style={{marginRight: "20px", border: "1px solid orange"}}/><span>Free shipping</span>
                        </div>
                        <div className="boostrap-icons-sim" style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                            <Sim style={{marginRight: "20px"}}/><span>Free SIM card included</span>
                        </div> 
                    </div>
                    
                    <div className="input-colors" style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                        <p className="text-color" style={{display: "flex", flexDirection: "row", justifyContent:"flex-start"}}>COLOR: {radioValue}</p>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start"}}> 
                            <input type="radio" id="colorChoice1"
                                    name="contact" value="BLACK" 
                                    onClick={handleClick} 
                                    className="black-input"
                            />
                            <input type="radio" id="colorChoice2" 
                                    name="contact" value="GOLD"
                                    onClick={handleClick}
                                    className="gold-input"
                            />
                            <input type="radio" id="colorChoice3"
                                    name="contact" value="WHITE"
                                    onClick={handleClick}
                                    className="white-input"
                            />
                        </div>
                    </div>

                    <div className="storage-options" style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                        <p style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>Storage</p>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                            <input type="button" 
                                name="device storage" 
                                className="storage-input"
                                value="64GB"
                            />
                            <input type="button" 
                                name="device storage" 
                                className="storage-input"
                                value="128GB"
                            />
                            <input type="button" 
                                name="device storage" 
                                className="storage-input"
                                value="256GB"
                            />
                        </div>
                    </div>

                    <div className="payment-options" style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                        <p style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>Payment</p>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                            <input type="button" 
                                name="payment" 
                                className="payment-input"
                                value="Pay Monthly"
                            />
                            <input type="button" 
                                name="payment" 
                                className="payment-input"
                                value="Pay in Full"
                            />
                        </div>
                        
                    </div>

                    <div className="financing-options" style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                        <p style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>FINANCE WITH</p>
                        <div className="smart-pay"  style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                            <p className="pay-terms">$10.15/mo</p>
                            <p>{smart}{pay}</p>
                        </div>
                    </div>
                    
                </div>
                
            
            </div>
         </div>
        
    )
}

export default ProductView



/*

<img
                    width={120}
                    height={120}
                    className="picture"
                    src="iphone_xs_max.png"
                    alt="Generic placeholder"
                    style={{marginTop: "30px"}}



*/