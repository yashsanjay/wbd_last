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
            <nav className={`navbar ${isNavOpen ? 'nav-open' : ''}`}>
                <div className="navbar-container">
                    <div className="navbar-logo-container" >
                        <Link to="/" >
                            <img src="../../images/logo.jpg" alt="Your Logo" className="navbar-logo"  />
                        </Link>
                        <button className="navbar-toggler" onClick={toggleNav}>
                            &#9776;
                        </button>
                    </div>
                    <div style={{marginLeft:'30rem'}}>
                        <ul className={`navbar-list ${isNavOpen ? 'nav-open' : ''}`}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/doctor">Doctors</Link></li>
                            <li><Link to="/medicines">Medicines</Link></li>
                            {/* <li><Link to="/fsd">First Aid/Emergency</Link></li> */}
                            <li><Link to="/premium">Premium</Link></li>
                            <li><Link to="/clientoffers">Offers</Link></li>
                            <li><Link to="/home" style={{textWrap:'nowrap'}}>Sign In</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
