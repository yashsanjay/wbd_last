// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header>
            <nav className="navbar">
                <li>

                <Link to="/">
                    <img src="../../images/logo.jpg" alt="Your Logo" className="navbar-logo" />
                </Link>
                <button className="navbar-toggler">&#9776;</button>
                </li>
                <ul className="navbar-list">
                    <li><Link to="/user">Home</Link></li>
                    <li><Link to="/doctor">Doctors</Link></li>
                    <li><Link to="/Medicines">Medicines</Link></li>
                    {/* <li><Link to="/fsd">First Aid/Emergency</Link></li> */}
                    <li><Link to="/premium">Premium</Link></li>
                    <li><Link to="/ClientOffers">Offers</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;




// Header.js

// Header.jsx
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './header.css';

// function Header() {
//     return (
//         <>
//             <header>
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                     <NavLink className="navbar-brand" to="../images/logo.jpg"></NavLink>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
//                         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav ml-auto">
//                             <li className="nav-item"><NavLink className="nav-link" to="/user">Home</NavLink></li>
//                             <li className="nav-item"><NavLink className="nav-link" to="/doctor">Doctors</NavLink></li>
//                             <li className="nav-item"><NavLink className="nav-link" to="/project_final">Medicines</NavLink></li>
//                             <li className="nav-item"><NavLink className="nav-link" to="/fsd">First Aid/Emergency</NavLink></li>
//                             <li className="nav-item"><NavLink className="nav-link" to="/premium">Premium</NavLink></li>
//                             <li className="nav-item"><NavLink className="nav-link" to="/offers">Offers</NavLink></li>
//                             <li className="nav-item"><NavLink className="nav-link" to="#">Login</NavLink></li>
//                         </ul>
//                     </div>
//                 </nav>
//             </header>
//         </>
//     );
// }

// export default Header;
