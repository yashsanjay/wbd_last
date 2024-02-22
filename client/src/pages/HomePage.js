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
        <h1 className="text-center" style={{backgroundImage: `url('https://assets-global.website-files.com/5a9423a3f702750001758d4f/62deec2b7c0248d7d39c5d4e_7noNSewmAQpGg-nlXAenZ2R7rpSLSUej9LTN3IWmdIFTPItDB1Hk2UjLAtGiOojEAP4SzCqcalPzF3eOo1PBQMCerpxL3hLvVIxfP14Tb0yNRChl9-Hrv1YIStL1ov9q0fzraKxOF0r7YXRKeQsQ1VA.png')` }}>Home Page</h1>
        <Row style={{paddingleft:"15px" ,backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20221215/pngtree-water-color-cloudy-blue-sky-texture-background-image_1492729.jpg')` }}>
          {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
        </Row>
      </Layout>
    </HomePageWrapper>
  );
};

export default HomePage;
