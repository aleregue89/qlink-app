import React, {Component} from 'react'
import '../styles/Nav.css'
import Header from './Header'

class Nav extends Component {
    render() {
        return (
            <div className="container">
                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <li>
                            <div>Upload Proof</div>
                        </li>
                        <li>
                            <div>Activate</div>
                        </li>   
                        <li>
                            <div>Searchbar</div>
                        </li>
                        <li>
                            <div>select language</div>
                        </li>
                    </ul>
                    <p>Login</p>
                </nav>
                <Header />
            </div>
            
        )
    }
}

    


export default Nav