import React from 'react'
import '../styles/Welcome.css'

const Welcome = () => {
    return (
        <div className="shop-welcome-container">
            <div className="shop-welcome-header">
                <h6>WELCOME!</h6>
            </div>
            <div className="welcome-content">
                <img
                    width={120}
                    height={120}
                    className="mr-3"
                    src="Image29.png"
                    alt="Generic placeholder"
                />
                <div className="welcome-text">
                    <p className="text1">Welcome to Q Link Wireless....Cras sit amet nibh libero, in gravida nulla. 
                        Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, 
                        vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc 
                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
        
    )
}

export default Welcome


/*
<Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>Media Heading</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
</Media>
*/