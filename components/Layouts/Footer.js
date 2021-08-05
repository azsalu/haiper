import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a><img src="/images/logo.png" alt="logo" /></a>
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                </div>
                                
                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a> 
                                    </li>
                                    <li> 
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a> 
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>
                                
                                <ul className="list">
                                    <li>
                                        <Link href="/about-us">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/features-one">
                                            <a>Features</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            <a>Our Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-one">
                                            <a>Latest News</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>
                                
                                <ul className="list">
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-condition">
                                            <a>Terms & Condition</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Community</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>
                                
                                <ul className="footer-contact-info">
                                    <li>
                                        <span className="mr-1">Location:</span> 
                                        27 Division St, New York, <br /> NY 10002, USA
                                    </li>
                                    <li>
                                        <span className="mr-1">Email:</span> 
                                        info@haiper.com
                                    </li>
                                    <li>
                                        <span className="mr-1">Phone:</span> 
                                        + (321) 984 754
                                    </li>
                                    <li>
                                        <span className="mr-1">Fax:</span> 
                                        +1-212-9876543
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>© {currentYear} Haiper - All rights Reserved <a href="http://envytheme.com/" target="_blank">EnvyTheme.com</a></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;