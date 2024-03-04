import React, { useEffect } from 'react';
import './user.css';
import { Link } from 'react-router-dom';
// import Patient from './patient_login';

const User = () => {
  

  return (<>
  <main>
  
  <div class="intro">
  
    <h1>Opiherbs</h1>
    <p>We take care of Patients like our own. Feel Homely even in Hospital.</p>
    <Link to="/register">
    <button>Welcome to our Family!</button>
    </Link>
  </div>
  

  <div class="about-me">
    <div class="about-me-text">
      <h2>Doctors</h2>
      <p>We have the best Doctors. Behold yourself you are our top priority and you are in care of the excellent experts. We have expert doctors from all fields and from all over India to help you. Patients first ALWAYS!</p>
    </div>
    <img src="https://img.freepik.com/premium-photo/group-successful-confident-modern-medical-doctors-are-posing-looking-camera-hospital-corridor_283617-1203.jpg"></img>
  </div>

  <div class="achievements">
    <div class="work">
      {/* <i class="fas fa-atom"></i> */}
      <img src="https://img.freepik.com/premium-photo/portrait-african-american-doctor-hospital-background_93675-101223.jpg"></img>
      <p class="work-heading">Dr. Arun Mallick</p>
      <p class="work-text ">Dermatologist Specialist</p>
      <p class="work-text">In practice for 7 years.</p>
    </div>
    <div class="work">
    <img src="https://img.freepik.com/free-photo/portrait-smiling-medical-worker-girl-doctor-white-coat-with-stethoscope-pointing-fingers-left-showing-medical-clinic-advertisement-torquoise-background_1258-87675.jpg"></img>
      {/* <i class="fas fa-skiing"></i> */}
      <p class="work-heading">Dr. Nidhi Singhania</p>
      <p class="work-text">Pediatrician (Child SPecialist) </p>
      <p class="work-text">In practice for 6 years.</p>
    </div>
    <div class="work">
    <img src="https://www.shutterstock.com/image-photo/smiling-young-male-doctor-holding-600nw-1624029370.jpg"></img>
      {/* <i class="fas fa-ethernet"></i> */}
      <p class="work-heading">Dr. Pawan Bhatt</p>
      <p class="work-text">Ophthalmologist Specialist</p>
      <p class="work-text">In practice for 10 years.</p>
    </div>
  </div>
  
  


  <div class="about-me">
    <div class="about-me-text">
      <h2>Medicines</h2>
      <p>Top quality medicines. All the doctors here do not compromise on the quality of medicines at all. Inhere you get all the medicines prescribed by your doctor in the most feasible amount. Also you can get according to your dosage.</p>
    </div>
    <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzNiYXRjaDE1LTIxNy0wMS5qcGc.jpg" alt="me"></img>
  </div>

   
  <div class="achievements">
    <div class="work">
    <img src="https://5.imimg.com/data5/ANDROID/Default/2023/7/328832724/GE/RU/JH/193761603/product-jpeg-500x500.jpg"></img>
      {/* <i class="fas fa-atom"></i> */}
      <p class="work-heading">Paracetamol</p>
      <p class="work-text">For cold, headache and also helps in reduce body pain acts as painkiller.</p>
    </div>
    <div class="work">
    <img src="https://img-new.cgtrader.com/items/4355655/49ff465522/large/optive-lubricant-eye-drops-bottle-3d-model-49ff465522.jpg"></img>
      {/* <i class="fas fa-skiing"></i> */}
      <p class="work-heading">Lubricant Eye Drops</p>
      <p class="work-text">For dry, itchy and red eyes.</p>
    </div>
    <div class="work">
      <img src="https://i0.wp.com/www.johnsonbecker.com/wp-content/uploads/2017/11/Januvia-Bottle-224x300.jpg?resize=224%2C300"></img>
      {/* <i class="fas fa-ethernet"></i> */}
      <p class="work-heading">Diabetes</p>
      <p class="work-text">For sugar patients.</p>
    </div>
  </div>
  

  
  
   {/* Animation Section */}
   {/* <div className="animation-container">
          <div className="animation-section">
            <div className="animation-content">
              <h2 className="animation-title">Animation Title1</h2>
              <p className="animation-text">Animated content coming from the left</p>
            </div>
          </div>
        </div>     */}
  
      

        {/* Add the CSS for the animation */}
        <style>
          {`
          .animation-container {
            position: relative;
            height: 50vh; /* Adjust the height as needed */
          }
            .animation-section {
              width: 100%; /* Adjust the width as needed */
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background: linear-gradient(to right, #333, #fff); /* Dark grey to white gradient */
              background-size: 200% 100%; /* Double the background size */
              opacity: 0;
              transition: opacity 0.5s ease-in-out, background-position 0.5s ease-in-out; /* Transition for opacity and background position */
              z-index: 1;
            }

            .animation-section.animate {
              opacity: 1;
              background-position: -100% 0; /* Move the background position to the initial state */
            }

            .animation-content {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: -100%;
              color: black;
              opacity: 0;
              transition: left 0.5s ease-in-out, opacity 0.5s ease-in-out;
            }

            .animation-section.animate .animation-content {
              left: 0;
              opacity: 1;
            }


          `}
        </style>
</main>

  </>)
}

export default User