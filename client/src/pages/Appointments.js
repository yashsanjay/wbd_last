
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import moment from "moment";
import { Table, Spin } from "antd"; // Import Spin from antd for loading indicator

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [loadingUserDetails, setLoadingUserDetails] = useState(false); // New loading state

  const getAppointments = async () => {
    try {
      setLoadingUserDetails(true); // Set loading state to true
      const res = await axios.get("/api/v1/user/user-appointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);

        // Extract userIds from appointments
        const userIds = res.data.data.map((appointment) => appointment.userId);

        // Fetch user details for each userId
        const usersData = await Promise.all(
          userIds.map((userId) =>
            axios.get(`/api/v1/doctor/${userId}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
          )
        );

        // Store user details in the state
        setUserDetails(usersData.map((user) => user.data.data));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingUserDetails(false); // Set loading state to false after API call completes
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
      title: "User Details",
      dataIndex: "userId",
      render: (userId) => {
        const userDetail = userDetails.find((user) => user._id === userId);
        return userDetail ? `${userDetail.name}` : "N/A";
      },
    },
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
    <Layout>
    <h1>Appointments List</h1>
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "100vh" ,minWidth:"1000px"}}>
      {loadingUserDetails ? ( // Show loading indicator if user details are still loading
        <Spin size="large" />
      ) : (
        <Table columns={columns} dataSource={appointments}style={{minWidth:"75vw"}} />
      )}
    </div>
  </Layout>
  );
};

export default Appointments;
