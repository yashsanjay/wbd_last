import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout";
import axios from "axios";
import moment from "moment";
import { message, Table, Spin, Input } from "antd";

const { Search } = Input;

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loadingUserDetails, setLoadingUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/doctor/doctor-appointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);
        // Extract user IDs from appointments
        const userIds = res.data.data.map((appointment) => appointment.userId);
        // Fetch user details for each user ID
        setLoadingUserDetails(true);
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
        setUserDetails(
          usersData.reduce((acc, user) => {
            acc[user.data.data._id] = user.data.data;
            return acc;
          }, {})
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingUserDetails(false);
    }
  };

  // Fetch description for each appointment
  const fetchDescriptions = async () => {
    try {
      const descriptions = await Promise.all(
        appointments.map(async (appointment) => {
          const res = await axios.get(`/api/v1/user/${appointment.userId}/description`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          return { id: appointment._id, description: res.data.data.description };
        })
      );
      // Merge descriptions with appointments
      setFilteredAppointments(prevAppointments =>
        prevAppointments.map(appointment =>
          Object.assign(appointment, descriptions.find(desc => desc.id === appointment._id))
        )
      );
    } catch (error) {
      console.error("Error fetching descriptions: ", error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  useEffect(() => {
    // Filter appointments based on search term
    const filtered = appointments.filter(appointment => {
      const userDetail = userDetails[appointment.userId];
      return userDetail && userDetail.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredAppointments(filtered);
  }, [searchTerm, appointments, userDetails]);

  useEffect(() => {
    if (appointments.length > 0) {
      fetchDescriptions();
    }
  }, [appointments]);

  const handleStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/update-status",
        { appointmentsId: record._id, status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        getAppointments();
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "userId",
      render: (userId) => {
        const userDetail = userDetails[userId];
        return userDetail ? userDetail.name : "N/A";
      },
    },
    {
      title: "Date & Time",
      dataIndex: "date",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")} &nbsp;
          {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" && (
            <div className="d-flex">
              <button
                className="btn btn-success"
                onClick={() => handleStatus(record, "approved")}
              >
                Approved
              </button>
              <button
                className="btn btn-danger ms-2"
                onClick={() => handleStatus(record, "reject")}
              >
                Reject
              </button>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
        <h1>Appointments Lists</h1>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <Search
            placeholder="Search by name"
            allowClear
            onChange={handleSearch} // Use handleSearch function directly
            style={{ width: 200 }}
          />
          {loadingUserDetails ? (
            <Spin size="large" />
          ) : (
            <></>
          )}
        </div>
        <Table columns={columns} dataSource={filteredAppointments} style={{ minWidth: "75vw" }} />
      </div>
    </Layout>
  );
};

export default DoctorAppointments;
