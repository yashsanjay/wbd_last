import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <header>

            <nav className="navbar">
                {/* <li> */}

                <Link to="/">
                    <img src="../../images/logo1.png" alt="Your Logo" className="navbar-logo" />
                </Link>
                <button className="navbar-toggler">&#9776;</button>
                {/* </li> */}
                <ul className="navbar-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/doctor">Doctors</Link></li>
                    {/* <li><Link to="/Medicines">Medicines</Link></li> */}
                    {/* <li><Link to="/fsd">First Aid/Emergency</Link></li> */}
                    <li><Link to="/newpremium">Premium</Link></li>
                    {/* <li><Link to="/ClientOffers">Offers</Link></li> */}
                    {/* <li><Link to="/home">Sign In</Link></li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
