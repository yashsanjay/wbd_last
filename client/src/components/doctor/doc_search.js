import React from "react";
import './doc_search.css';
import Doctors_List from "./doc_list";
import { Link } from "react-router-dom";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Secular+One&family=Yesava+One&display=swap"
/>


function Docsearch() {
    return (
        <>
            <section class="image">
                        <Link to="/doctor_list">
                <div class="container-image heading">
                    <h1 id="heading">FIND YOUR NEAREST DOCTOR NOW</h1>
                    
                    
                    {/* <form action="doctor_list" style="padding-right: 650px ;"> */}
                        {/* <i class="fas fa-search" aria-hidden="true"></i>  */}
                        
                        <input class="search" type="text" id="Spec" name="Spec"
                            placeholder="Search for specializations or district" oncl/>
                        
                </div>
                </Link> 
                    {/* </form> */}
                   




                <div class="consult">
                    <h2>Consult with the Best Doctors Around the world</h2>
                    <p>Starting at ₹199</p>
                    <div id="flex" onscroll="handleScroll()">
                        <div class="box">
                            {/* <img src="https://img.freepik.com/premium-vector/vector-illustration-cardiologist-white-coat-with-heart-his-hands-profession_87693-1659.jpg" */}
                                {/* alt="doctor"> */}
                        </div>

                        <div class="box">


                            <div class="boxside">Talk within 30 min</div>
                            <div class="boxside">First consultation entirely free!</div>
                            <div class="boxside">Get a valid prescription</div>

                        </div>



                    </div>
                </div>
            </section>

        </>
    );
}

export default Docsearch;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import './doc_search.css';

// function Docsearch() {
//     const navigate = useNavigate();

//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             navigate("/doctor_list");
//         }
//     };

//     return (
//         <>
//             <section className="image">
//                 <div className="container-image">
//                     <h1 id="heading">FIND YOUR NEAREST DOCTOR NOW</h1>

//                     <input
//                         className="search"
//                         type="text"
//                         id="Spec"
//                         name="Spec"
//                         placeholder="Search for specializations or district"
//                         onKeyDown={handleKeyDown}
//                     />
//                 </div>

//                 <div className="consult">
//                     <h2>Consult with the Best Doctors Around the world</h2>
//                     <p>Starting at ₹199</p>
//                     <div id="flex" onScroll={() => { /* handleScroll() function implementation here */ }}>
//                         <div className="box">
//                             {/* Add your image */}
//                         </div>

//                         <div className="box">
//                             <div className="boxside">Talk within 30 min</div>
//                             <div className="boxside">First consultation entirely free!</div>
//                             <div className="boxside">Get a valid prescription</div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Docsearch;
