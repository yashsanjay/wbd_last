import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";
import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const DoctorsExpandedWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  overflow: scroll;
  height: 200%;
  padding: 20px;
`;

const DoctorsExpanded = () => {
  const [doctorDetails, setDoctorDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    // Fetch doctor details here
    const fetchDoctorDetails = async () => {
      try {
        const response = await axios.post(
          "/api/v1/admin/getDoctorById",
          { doctorId: params.id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setDoctorDetails(response.data.data);
          console.log(response.data.data)
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctorDetails();
  }, []);

  return (
    <DoctorsExpandedWrapper>
      <Layout>
        {doctorDetails && (
          <>
            <h1 className="text-center">Doctor Details</h1>
            <Row gutter={20}>
              <Col xs={24} md={24} lg={8}>
                <h4>Personal Details:</h4>
                <p>First Name: {doctorDetails.firstName}</p>
                <p>Last Name: {doctorDetails.lastName}</p>
                <p>Phone: {doctorDetails.phone}</p>
                <p>Email: {doctorDetails.email}</p>
                <p>Website: {doctorDetails.website}</p>
                <p>Address: {doctorDetails.address}</p>
              </Col>
              <Col xs={24} md={24} lg={8}>
                <h4>Professional Details:</h4>
                <p>Specialization: {doctorDetails.specialization}</p>
                <p>Experience: {doctorDetails.experience}</p>
                <p>Fees Per Consultation: {doctorDetails.feesPerConsultation}</p>
                <p>Timings: {doctorDetails.timings.join(" - ")}</p>
              </Col>
              <Col xs={24} md={24} lg={8}>
                {/* Additional columns can be added here */}
              </Col>
            </Row>
          </>
        )}
      </Layout>
    </DoctorsExpandedWrapper>
  );
};

export default DoctorsExpanded;
