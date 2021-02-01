import React from 'react'
import '../styles/Welcome.css'
import Image from 'react-bootstrap/Image'
//import Container from 'react-bootstrap/Container'
//mport Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

const Welcome = () => {
  return (
    <div className="shop-welcome-container">
      <div className="shop-welcome-header">
        <h1 style={{marginTop: "20px", fontSize: "10px"}}>WELCOME!</h1>
      </div>

      <div className="welcome-content">
        <div>
          <Image style={{marginBottom: "50px"}} src="Image29.png"  />
        </div>

        <div className="welcome-text">
          <p className="text1">Welcome to Q Link Wireless....Cras sit amet nibh libero, in gravida nulla. 
                Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, 
                vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc 
                ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </div>

      </div>
  </div>
  )
}

export default Welcome