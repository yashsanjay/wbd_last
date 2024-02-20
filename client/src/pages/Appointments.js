import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import moment from "moment";
import { Table } from "antd";
import styled from "styled-components";

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
    // {
    //   title: "Name",
    //   dataIndex: "name",
    //   render: (text, record) => (
    //     <span>
    //       {record.doctorInfo.firstName} {record.doctorInfo.lastName}
    //     </span>
    //   ),
    // },
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
