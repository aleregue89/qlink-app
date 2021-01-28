import React from 'react'
import '../styles/Own.css'
import Button from 'react-bootstrap/Button'

const Own = () => {
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
                <p className="brand">QLink</p>
                <h3>Bring your own phone</h3>
            </div>
            <div className="content">
                <div className="info-text">
                    <p>Get unlimited Minutes and Data for x months when you bring your exisitng eligible phone to Q Link Wireless...</p>
                </div>
                <Button variant="primary" size="lg" block>
                    Block level button
                </Button>
            </div>
            
        </div>
    )
}

export default Own