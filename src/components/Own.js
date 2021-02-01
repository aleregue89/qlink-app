import React from 'react'
import '../styles/Own.css'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const Own = () => {
    return (
        <div className="col-lg-4 col-md-6 col-12" style={{padding: "10px"}}>
            <div style={{border: "1px solid lightgray", borderRadius: "5px", padding: "10px"}}>
                <div style={{marginTop: "25px"}}>
                    <Image src="byop.png" fluid/>
                </div>
                
                <div className="product-brand">
                    <p className="brand">QLink</p>
                    <h3 className="text-own" style={{fontSize: "15px"}}>Bring your own phone</h3>
                </div>

                <div className="own-content" style={{borderTop: "1px solid lightgrey", marginTop: "5px", paddingTop: "5px"}}>
                    <div className="info-text">
                        <p style={{fontSize: "10px", color: "grey"}}>Get unlimited Minutes and Data for x months when you bring your exisitng eligible phone to Q Link Wireless...</p>
                    </div>

                    {/* <Button className="btn-action" variant="primary" size="lg" block>
                        Bring your own phone
                    </Button> */}
                </div>

                <Button className="btn-action-products" variant="primary" size="md" block style={{backgroundColor: "white", color: "dodgerblue", fontSize: "10px", 
                        backgroundColor: "dodgerblue", color: "white"}}>
                        Bring your own phone
                </Button>

            </div>
            
            
        </div>
    )
}

export default Own