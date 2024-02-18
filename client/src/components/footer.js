import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './footer.css'

function Footer() {
    return (
        <footer>
            <div class="footer">

                <div>
                    <h4>Know us</h4>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    {/* <li><a href="contact">Contact</a></li> */}
                    {/* <li><a href="">Business</a></li>
                    <li><a href="partnership">Partnership</a></li> */}
                    <li><Link to="/home">Admin</Link></li>
                    <li><Link to="/home">Doctor Login</Link></li>

                </div>
                <div>
                    <h4>Our Policies</h4>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/greivance">Grievances And Redressal</Link></li>
                    <li><Link to="/fakejob">Fake Jobs and Frauds</Link></li>
                    
                </div>
                <div>
                    <h4>Our Services</h4>
                    {/* <li><a href="medicines">Order Medicines</a></li> */}
                    <li><Link to="/Medicines">Order Medicines</Link></li>
                    <li><Link to="/doctor">Consut a Doctor</Link></li>
                    <li><a href="">Articles</a></li>
                </div>
                <div>
                    <h4>Connect with Us</h4>
                    <li>

                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook} /><Link to="/oops">Facebook</Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faTwitter} /> <Link to="/oops">Twitter</Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} /> <Link to="/oops">Instagram</Link>
                        </a>
                    </li>
                    <li>
                        
                        <a href="#">
                            <FontAwesomeIcon icon={faLinkedin} /> <Link to="/oops">LinkedIn</Link>
                        </a>
                    </li>

                        


                </div>


            </div>
        </footer>
    );
}

export default Footer;
