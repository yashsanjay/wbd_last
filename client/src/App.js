import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import DoctorCard from './components/doctor_card';
import Doctor from './components/doctor/doctor';
import Footer from './components/footer';

import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState,useEffect } from 'react';

import Premium from './components/Premium/premium';
import AdminPage from './components/Admin/AdminPage'
import Offers from './components/offers/Offers'
import PaymentDashboard from './components/Premium/PaymentDashboard'

import Doctors_List from './components/doctor/doc_list';

import User from './components/Home/user'; 
// import Profile from './components/doctor/doc_profile';
import Medicines from './components/shop/Medicines';
import Cart from './components/shop/Cart';
import Homee from './components/shop/Homee'
import OopsPage from './components/oopspage';
import GrievancesAndRedressal from './components/OurPolicies/Greivance';
import FakeJobAndFrauds from './components/OurPolicies/Fakejob';
import PrivacyPolicy from './components/OurPolicies/privacy';

import AboutUs from './components/AboutUs/aboutus';
import ContactUs from './components/ContactUs/ContactUs';

import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

import ApplyDoctor from './pages/ApplyDoctor';
import NotificationPage from './pages/NotificationPage';
import Users from './pages/admin/Users';
import Doctors from './pages/admin/Doctors';
import BookingPage from './pages/BookingPage';
import Appointments from './pages/Appointments';
import DoctorAppointments from './pages/doctor/DoctorAppointments';
import HomePage from "./pages/HomePage";
import Profile from './pages/doctor/Profile'

import ImageUpload from './pages/ImageUpload';
import AdminDashboard from './pages/admin/Admin';


function App() {
  const { loading } = useSelector((state) => state.alerts);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/user" element={<User />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor_list" element={<Doctors_List />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Admin" element={<AdminPage />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/PaymentDashboard" element={<PaymentDashboard />} />
          {/* <Route path="/doc_profile" element={<Profile />} /> */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/greivance" element={<GrievancesAndRedressal />} />
          <Route path="/fakejob" element={<FakeJobAndFrauds />} />
          <Route path="/oops" element={<OopsPage />} />
          <Route path="/MedHome" element={<Homee />} />
          <Route path="/Medicines" element={<Medicines cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/ImageUpload"  element={<ImageUpload/>}/>
          <Route path="/admindashboard"  element={<AdminDashboard/>}/>
          
        {/* </Routes>

        <Routes> */}
          <Route path="/apply-doctor" element={<ProtectedRoute><ApplyDoctor /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
          <Route path="/admin/doctors" element={<ProtectedRoute><Doctors /></ProtectedRoute>} />
          <Route path="/doctor/profile/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/doctor/book-appointment/:doctorId" element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
          <Route path="/notification" element={<ProtectedRoute><NotificationPage /></ProtectedRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
          <Route path="/appointments" element={<ProtectedRoute><Appointments /></ProtectedRoute>} />
          <Route path="/doctor-appointments" element={<ProtectedRoute><DoctorAppointments /></ProtectedRoute>} />
        </Routes>

        {loading && <Spinner />}
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
