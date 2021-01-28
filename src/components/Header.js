import React from 'react'
import '../styles/Header.css'

const Header = (props) => {
    return (
        <div className="options">
            <div className="logo" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
                        <img style={{borderRadius: '100%', height: 30, width: 30, marginLeft: 15}} alt="company-logo" src='Image5.png' />
            </div>
            <select className="menu-items">
                <option value=''>Your Q Link</option>
            </select>
            <select>
                <option value=''>Activity</option>
            </select>
            <select>
                <option value=''>Shop</option>
            </select>
            <select>
                <option value=''>Help Center</option>
            </select>
        </div>
        
    )
}

export default Header