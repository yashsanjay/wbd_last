import React from "react";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import './doctor.css'
import Docsearch from './doc_search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Doctor() {
    const [records, setRecords] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Docsearch />


            <section class="ourdoc" id="ourdoc">
                <h1 class="docheading">Our doctors</h1>

                {/* <div class="ourboxcontainer">
                    {/* <%doctorlist.forEach(function(doctor) {%> */}
                {/* <div class="ourbox"> */}




                {/* <span>Specialization:<%=doctor.specialization%></span>
                        <span>Expert Doctor</span>
                        <div class="share">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    <%})%> */}
                {/* </div>
                </div> */}

                <div class="ourboxcontainer">
                    {records.slice(0, 4).map((list, index) => (
                        <div class="ourbox">
                            {/* <img src="" alt="doc"> */}
                            <li hidden>key={index}</li>
                            <h3>{list.name}</h3>
                            <span>Location: {list.address.street}</span>
                            <div className="shareshare">
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div class="ourboxcontainer">
                    <div class="ourbox">  */}
                {/* <img src="" alt="doc"> */}
                {/* <h3>john</h3>
                            <span>expert doc</span>
                            <div class="share">
                                <a href="#" class="fab fa-facebook-f"></a>
                                <a href="#" class="fab fa-twitter"></a>
                                <a href="#" class="fab fa-instagram"></a>
                                <a href="#" class="fab fa-linkedin"></a>
                            </div>
                    </div>
                </div>  */}
            </section>











            <section class="doc">
                <div class="doctor">


                    <div id="flexdoc">


                        <div class="boxdoc">


                            <h1>ARE YOU A DOCTOR?</h1>
                            <div class="boxsidedoc">Join Us Today and connect with patients around the world

                            </div>

                            <body>
                                {/* <!-- <a href="/dashboard" class="button">Join Us</a> --> */}
                                <Link to='/home'>
                                    <a class="button" >Join Us</a>
                                </Link>
                            </body>


                        </div>
                        {/* <!-- <div class="box">
                            <img src="/doc_heart.png" alt="doctor">
                        </div> --> */}



                    </div>
                </div>
            </section>
        </>
    );
}

export default Doctor;