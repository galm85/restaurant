import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components.css';

const Footer = () => {
    return (  
        <div className="footer-container">
            
            <div className="footer-left">

                <div className="footer-links">
                        <Link to="/"> Home</Link>
                        <Link to="/menu"> Menu</Link>
                        <Link to="/about-us"> About</Link>
                        <Link to="/jobs"> Jobs</Link>
                </div>

                <div className="footer-social-media">
                    <a href="" ><i class="fab fa-facebook"></i></a>
                    <a href="" ><i class="fab fa-instagram"></i></a>
                </div>

            </div>

            
                
            <div className="footer-right">
                <div>
                    Created By Gal Mizrahi &copy; {new Date().getFullYear()}
                    <br/>
                    <a  href="https://github.com/galm85"  target="_blank"><i class="fab fa-github"></i></a>
                    <a  href="https://galdev.netlify.app" target="_blank" ><i class="fas fa-globe"></i></a>
                </div>
                
            </div>
        
        
        </div>
      );
}
 
export default Footer;