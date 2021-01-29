import React from 'react'
import '../styles/NavBar.css'


const NavBar = (props) => {
    return (
        <div className="NavBar-options">
            <div className="logo" style={{display: 'flex', flexDirection: 'row'}}> 
                        <img className="NavLogo" style={{borderRadius: '100%', height: 45, width: 65, marginLeft: 0, marginTop: 5}} alt="company-logo" src='Image5.png' />
            </div>
            <div className="menu">
                <select className="menu-items">
                    <option value=''>Your Q Link</option>
                </select>
                <select className="menu-items">
                    <option value=''>Activity</option>
                </select>
                <select className="menu-items">
                    <option value=''>Shop</option>
                </select>
                <select className="menu-items">
                    <option value=''>Help Center</option>
                </select>
            </div>
            <div>
                <p className="login">Login</p>
            </div>
            
        </div>
        
    )
}

export default NavBar