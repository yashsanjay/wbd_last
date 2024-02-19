import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";

// Define a styled component for HomePage
const HomePageWrapper = styled.div`
  /* Styles for the entire HomePage component */
  max-width: 1350px; /* Set your desired max-width */
  margin: 0 auto; /* Center the content */
  overflow: scroll; /* Add both horizontal and vertical scrollbars if needed */
  height: 200%; /* Ensure the block takes up 100% of available height */
  padding: 20px; /* Add padding to the content if needed */
`;

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);

  const getUserData = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllDoctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <HomePageWrapper>
      <Layout>
        <h1 className="text-center">Home Page</h1>
        <Row>
          {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
        </Row>
      </Layout>
    </HomePageWrapper>
  );
};

export default HomePage;
