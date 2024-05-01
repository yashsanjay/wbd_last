import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import moment from "moment";
import ImageUpload from "./ImageUpload";
import styled from "styled-components";

const HomePageWrapper = styled.div`
  /* Styles for the entire HomePage component */
  max-width: 1350px; /* Set your desired max-width */
  margin: 0 auto; /* Center the content */
  overflow: scroll; /* Add both horizontal and vertical scrollbars if needed */
  height: 200%; /* Ensure the block takes up 100% of available height */
  padding: 20px; /* Add padding to the content if needed */
`;


const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);
  const [User, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  //handle form
  const handleFinish = async (values) => {

    const originalDate = values.timings[0].$d;
    if (originalDate === undefined) {
      originalDate = values.timings[0]._d;
    }
    const updatedDate = new Date(originalDate.getTime() + (5 * 60 * 60 * 1000) + (30 * 60 * 1000));
    const hours = updatedDate.getUTCHours().toString().padStart(2, '0');
    const minutes = updatedDate.getUTCMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    console.log(timeString);

    const originalDatee = values.timings[1].$d;
    if (originalDatee === undefined) {
      originalDatee = values.timings[1]._d;
    }
    const updatedDatee = new Date(originalDatee.getTime() + (5 * 60 * 60 * 1000) + (30 * 60 * 1000));
    const hourss = updatedDatee.getUTCHours().toString().padStart(2, '0');
    const minutess = updatedDatee.getUTCMinutes().toString().padStart(2, '0');
    const timeStrings = `${hourss}:${minutess}`;
    console.log(timeStrings);
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/apply-doctor",
        {
          ...values,
          userId: user._id,
          timings: [
            timeString,
            timeStrings,
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/home");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrrong ");
    }
  };

  const getUserInfo = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserInfo",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setUser(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
    //eslint-disable-next-line
  }, []);
  return (
  <HomePageWrapper>
    <Layout>
      <h1 className="text-center">Apply Doctor</h1>
      {User &&(
      <Form layout="vertical" onFinish={handleFinish} className="m-3" initialValues={{
        ...User,
        
      }}>
        <h4 className="">Personal Details : </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Name"
              name="name"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your first name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Profile Photo"
              name="profilephoto"
              
            >
              <ImageUpload/>
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="email" placeholder="your email address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Website" name="website">
              <Input type="text" placeholder="your website" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="District"
              name="district"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your clinic address" />
            </Form.Item>
          </Col>
        </Row>
        <h4>Professional Details :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your specialization" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your experience" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Fees Per Cunsaltation"
              name="feesPerCunsaltation"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="fees per consultation" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="uid"
              name="uid"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your uid" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Timings" name="timings" required>
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary form-btn" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
      )}
    </Layout>
  </HomePageWrapper>
  );
};

export default ApplyDoctor;
