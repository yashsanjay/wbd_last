import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import moment from "moment";
import { Table,Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePageWrapper = styled.div`
  /* Styles for the entire HomePage component */
  max-width: 1350px; /* Set your desired max-width */
  margin: 0 auto; /* Center the content */
  overflow: scroll; /* Add both horizontal and vertical scrollbars if needed */
  height: 200%; /* Ensure the block takes up 100% of available height */
  padding: 20px; /* Add padding to the content if needed */
`;

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/user/user-appointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      // dataIndex: res.data.docotorName,
      render: (text, record) => (
        <span>
          {record.doctorInfo.docotorName} 
        </span>
      ),
    },
    // {
    //   title: "Phone",
    //   dataIndex: "phone",
    //   render: (text, record) => <span>{record.doctorInfo.phone}</span>,
    // },
    {
      title: "Date & Time",
      dataIndex: "date",
      render: (time, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")} &nbsp;
          {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      render: (text, record) => (
        record.status === "approved" ? (
          <Link to={`/bookingPayment`}>
            <Button type="primary">Pay Now</Button>
          </Link>
        ) : null
      ),
    },
  ];

  return (
    <HomePageWrapper>
    <Layout>
      <h1>Appointments Lists</h1>
      <Table columns={columns} dataSource={appointments} />
    </Layout>
    </HomePageWrapper>
  );
};

export default Appointments;
