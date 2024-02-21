// AdminDashboard.js

import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout";
import axios from "axios";
import "./Admin.css"; // Import CSS file for styling

const AdminDashboard = () => {
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [patientsCount, setPatientsCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const doctorsResponse = await axios.get("/api/v1/admin/getAllDoctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const patientsResponse = await axios.get("/api/v1/admin/getAllUsers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (doctorsResponse.data.success) {
        setDoctorsCount(doctorsResponse.data.data.length);
      }

      if (patientsResponse.data.success) {
        const patients = patientsResponse.data.data.filter(
          (user) => !user.isDoctor
        );
        setPatientsCount(patients.length);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Layout>
      <div className="dashboard-stats">
        <h1 className="text-center m-3">Admin Dashboard</h1>
        <div className="stats-container">
          <div className="stats-item doctors-box">
            <h2>Total Doctors</h2>
            <p>{doctorsCount}</p>
          </div>
          <div className="stats-item patients-box">
            <h2>Total Patients</h2>
            <p>{patientsCount}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
