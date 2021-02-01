import React from 'react'
import '../styles/Footer.css'
import {Facebook, Twitter, Instagram, InfoCircleFill} from 'react-bootstrap-icons'


const Footer = (props) => {

    return (
        <body>
            <div className="container"></div>
            <footer>

                <section className="ft-main">
                    <div className="ft-main-item">
                        <h2 className="ft-title">Helpful Links</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">My Q Link/Login</a></li>
                            <li><a href="#">Upload Proof</a></li>
                            <li><a href="#">Check Status</a></li>
                            <li><a href="#">Activate</a></li>
                            <li><a href="#">Coverage</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Lifeline Program</h2>
                         <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">About lifeline</a></li>
                            <li><a href="#">Enroll in lifeline</a></li>
                            <li><a href="#">Lifeline plans</a></li>
                            <li><a href="#">Lifeline features</a></li>
                            <li><a href="#">How do I qualify?</a></li>
                            <li><a href="#">FAQs/Help center</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Get Connected</h2>
                        <ul className="ft-social-list">
                            <li><Facebook /></li>
                            <li><Twitter /></li>
                            <li><Instagram /></li>
                            <li><InfoCircleFill /></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Tertinonials</h2>
                            <div className="tescontainer">
                                <article>
                                    <p>"I love my new phone from Q Link Wireless because it is easy to use
                                        and now I will never be without a phone. Thanks Q Link"
                                    </p>
                                </article>
                                <article>
                                    <p>"Q Link's service never lets me down. They sent me an excellent phone which I love
                                        and I have never had a problem.I use my phone to make appointments and stay connected
                                        with my work, friends and family"
                                    </p>
                                </article>
                            </div>
                    </div>
                </section>

                <section className="ft-social">
                    <ul className="ft-social-list">
                        <li>
                            <img
                                src="Image5.png"
                                className="d-inline-block align-top NavLogo"
                                alt="React Boostrap logo"
                                style={{borderRadius: '100%'}}
                            /> 
                        </li>
                    </ul>
                </section>

                <section className="ft-legal">
                    <ul className="ft-legal-list">
                        <li><a href="#">&copy; 2020 Q Link Wireless. All rights reserved.</a></li>
                        <li><a href="#">Unsubscribe</a><span>|</span></li>
                        <li><a href="#">Universal Form</a><span>|</span></li>
                        <li><a href="#">Privacy Policy</a><span>|</span></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                    </ul>
                </section>

            </footer>
        </body>
        
    )
}

export default Footer


/*

<div className="footer-container" style={{backgroundColor: "dodgerblue"}}>
            <footer className="text-center text-lg-start">
                <div className="container p-4" style={{backgroundColor: "dodgerblue"}}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0" style={{backgroundColor: "dodgerblue"}}>
                            <h5 className="text-uppercase">Footer Content</h5>

                            <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>
      
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0" style={{backgroundColor: "dodgerblue"}}>
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-dark">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Link 4</a>
                                </li>
                            </ul>
                        </div>
      

      
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0" style={{backgroundColor: "dodgerblue"}}>
                             <h5 className="text-uppercase mb-0">Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-dark">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-dark">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-dark">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-dark">Link 4</a>
                                    </li>
                                </ul>
                        </div>

                    </div>
    
                </div>


                <div className="text-center p-3" style={{backgroundColor: "dodgerblue"}}>
                    © 2020 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            </footer>


        </div>


*/