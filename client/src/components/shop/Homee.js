import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './shop.css'
const Homee = () => {
    useEffect(() => {
        const reveal = () => {
            var reveals = document.querySelectorAll('.reveal');
            for (var i = 0; i < reveals.length; i++) {
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;
                if (revealtop < windowheight - revealpoint) {
                    reveals[i].classList.add('active');
                }
            }
        };

        window.addEventListener('scroll', reveal);


        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', reveal);
        };
    }, []);
    return (
        <>
            <div className='med'>
                {/* <header>
                    <nav class="navbar">

                        <ul>
                            <li><img src="/ffsdprojectopiherb.jpg" alt="opiherb" id="logo" />
                            </li>
                            <li></li>
                            <li></li>



                            <li><a href="introduction">Introduction</a></li>
                            <li><a href="login">Login</a></li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" data-toggle="modal" data-target="#signupModal">Sign Up</a>
                            </li>
                            <li><a href="doctor_project_final">Doctors</a></li>

                            <li><Link to="/Medicines">Medicines</Link></li>

                            <li><Link to="/cart">Cart</Link></li>
                            <li><a href="index">Premium</a></li>
                            <li><a href="offers">Offers</a></li>


                        </ul>
                    </nav>
                </header> */}
                <section className="home" >
                    <div className='container '>
                        <div className='teddy'>
                            <img src="https://mydoctor.kaiserpermanente.org/mas/Images/thumbnail_large_teddy%20bear%20mask_crop_tcm88-1758438.jpg" />
                        </div>
                        <div className='content1'>
                            <h4>AVAILABLE EVERYWHERE</h4>
                            <h1>Delivering in 100+ cities all over India</h1>
                            <h4>From Delhi to Hyderabad,we home deliver medicines and health products all over India</h4>
                            <button><Link to='/Medicines'>Buy medicines</Link></button>
                            {/* add onclick here */}
                        </div>
                    </div>
                </section>
                <section className="home">
                    <div className='container reveal'>
                        <div className='teddy'>
                            <div className='img2'>
                                <img src="/images/newimg.jpg" />
                            </div>
                        </div>
                        <div className='content1'>
                            <h4>COMPREHENSIVE INFORMATION</h4>
                            <h1>Know your medicine</h1>
                            <h4>Exhaustive information about medicines written by verified medical experts</h4>
                            <button><Link to='/Medicines'>Buy medicines</Link></button>
                            {/* add onclick here */}
                        </div>
                    </div>
                </section>
                <section className="home">
                    <div className='container reveal'>
                        <div className='teddy'>

                            <img src="https://wwwnc.cdc.gov/travel/images/pill-bottle.jpg" width={500}  size={100}/>

                        </div>
                        <div className='content1'>
                            <h4>TRUSTED CARE</h4>
                            <h1>Genuine medicines</h1>
                            <h4>All medicines and health products are sourced from Opiherbs trusted network of verified pharmacies and medical stores</h4>
                            <button><Link to='/Medicines'>Buy medicines</Link></button>
                            {/* add onclick here */}
                        </div>
                    </div>
                </section>
                <section className="home">
                    <div className='container reveal'>
                        <div className='teddy'>
                            <div className='img2'>
                                <img src="https://img.freepik.com/free-photo/caucasian-man-receiving-his-order-from-deliverywoman-latin-courier-delivering-order-holding-parcels-clipboard-wearing-red-cap-shirt-express-delivery-service-online-shopping-concept_74855-11567.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais" width={520} />
                            </div>
                        </div>
                        <div className='content1'>
                            <h4>FAST HEALTH CARE</h4>
                            <h1>Reliable on time home delivery</h1>
                            <h4>Our in-house pharmacists ensure your medicines reach you when you need them</h4>
                            <button><Link to='/Medicines'>Buy medicines</Link></button>
                            {/* add onclick here */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Homee;