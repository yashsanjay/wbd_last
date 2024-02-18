// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import { useSelector } from "react-redux";
// import Spinner from "./components/Spinner";
// import ProtectedRoute from "./components/ProtectedRoute";
// import PublicRoute from "./components/PublicRoute";
// import ApplyDoctor from "./pages/ApplyDoctor";
// import NotificationPage from "./pages/NotificationPage";
// import Users from "./pages/admin/Users";
// import Doctors from "./pages/admin/Doctors";
// import Profile from "./pages/doctor/Profile";
// import BookingPage from "./pages/BookingPage";
// import Appointments from "./pages/Appointments";
// import DoctorAppointments from "./pages/doctor/DoctorAppointments";
// function App() {
//   const { loading } = useSelector((state) => state.alerts);
//   return (
//     <>
//       <BrowserRouter>
//         {loading ? (
//           <Spinner />
//         ) : (
//           <Routes>
//             <Route
//               path="/apply-doctor"
//               element={
//                 <ProtectedRoute>
//                   <ApplyDoctor />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/admin/users"
//               element={
//                 <ProtectedRoute>
//                   <Users />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/admin/doctors"
//               element={
//                 <ProtectedRoute>
//                   <Doctors />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/doctor/profile/:id"
//               element={
//                 <ProtectedRoute>
//                   <Profile />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/doctor/book-appointment/:doctorId"
//               element={
//                 <ProtectedRoute>
//                   <BookingPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/notification"
//               element={
//                 <ProtectedRoute>
//                   <NotificationPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/login"
//               element={
//                 <PublicRoute>
//                   <Login />
//                 </PublicRoute>
//               }
//             />
//             <Route
//               path="/register"
//               element={
//                 <PublicRoute>
//                   <Register />
//                 </PublicRoute>
//               }
//             />
//             <Route
//               path="/appointments"
//               element={
//                 <ProtectedRoute>
//                   <Appointments />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/doctor-appointments"
//               element={
//                 <ProtectedRoute>
//                   <DoctorAppointments />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/"
//               element={
//                 <ProtectedRoute>
//                   <HomePage />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         )}
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;


import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import DoctorCard from './components/doctor_card';
import Doctor from './components/doctor/doctor';
import Footer from './components/footer';

import Premium from './components/Premium/premium';
import AdminPage from './components/Admin/AdminPage'
import AdminLoginPage from './components/Admin/Admin_login';

import Offers from './components/offers/Offers'
import PaymentDashboard from './components/Premium/PaymentDashboard'

// import Signup_user from './components/Home/Signup_user';

import Doctors_List from './components/doctor/doc_list';
// <<<<<<< HEAD
// // <<<<<<< HEAD
// import User from './components/Home/user';
// // >>>>>>> 54e23b448467368185605b690849d83d9c382d0e
// // =======

// // import User from './components/Home/user';

// // >>>>>>> a923973fe17449933703782ea449230c469ca0fd
 
// =======

import User from './components/Home/user'; 


// >>>>>>> ae59b75aeee9a711db19f19ff4c4a31412ba5d1f
// import Login from './components/doctor/doc_login';
// import Patient from './components/Home/patient_login';
// import SignUp from './components/doctor/doc_signin';
import Profile from './components/doctor/doc_profile';
import Medicines from './components/shop/Medicines';
import Cart from './components/shop/Cart';
import Homee from './components/shop/Homee'
import OopsPage from './components/oopspage';
import GrievancesAndRedressal from './components/OurPolicies/Greivance';
import FakeJobAndFrauds from './components/OurPolicies/Fakejob';
import PrivacyPolicy from './components/OurPolicies/privacy';

import AboutUs from './components/AboutUs/aboutus';
import ContactUs from './components/ContactUs/ContactUs';

import { Provider } from 'react-redux';
// import store from './app/store';
// import { useSelector } from 'react-redux';
// import { selectUser } from './features/userSlice';

import ClientOffers from './components/offers/ClientOffers';


function App() {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // const user=useSelector(selectUser);
  return (
    <Router>
      
      <div className="App">
        <Header />
        {/* <Provider store={store}> */}


        <Routes>
          <Route path="/" element={<User />}/>
          <Route path="/user" element={<User />}/>
          {/* <Route path="/patient" element={<Patient />}/> */}
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor_list" element={<Doctors_List />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Admin" element={<AdminPage />} />
          {/* <Route path="/AdminLogin" element={<AdminLoginPage />} /> */}
          <Route path="/offers" element={<Offers />} />
          <Route path="/PaymentDashboard" element={<PaymentDashboard />} />
          {/* <Route path="/doc_login" element={<Login />} />
          <Route path="/doc_signin" element={<SignUp/>}/>
          <Route path="/SignUpUser" element={<Signup_user/>}/> */}
          <Route path="/doc_profile" element={<Profile />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/greivance" element={<GrievancesAndRedressal />} />
          <Route path="/fakejob" element={<FakeJobAndFrauds />} />
          <Route path="/oops" element={<OopsPage />} />
          <Route path="/MedHome" element={<Homee />} />
          <Route path="/Medicines" element={<Medicines cart={cart} setCart={setCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}  // Pass setCart to Cart
          />
          <Route path="/ClientOffers" element={<ClientOffers/>}/>

          {/* <Route path="/doc_profile" element={<profile />} /> */}


        </Routes>
        {/* </Provider> */}

        {/* <DoctorCard
          name="Dr. John Doe"
          specialty="Cardiologist"
          availability="Mon, Wed, Fri"
          imageSrc="doctor1.jpg"
        />
        <DoctorCard
          name="Dr. Jane Smith"
          specialty="Pediatrician"
          availability="Tue, Thu"
          imageSrc="doctor2.jpg"
        /> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
