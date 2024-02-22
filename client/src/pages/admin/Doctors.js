import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout";
import axios from "axios";
import { message, Table, Input, Button, Space } from "antd";
import styled from "styled-components";

const HomePageWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  overflow: scroll;
  height: 100vh; /* Set to 100% of the viewport height */
  padding: 20px;

  .ant-input {
    width: 300px; /* Set your desired width for the search input */
    margin-bottom: 16px;
  }

  .ant-btn {
    margin-right: 8px;
  }

  .actions-container {
    display: flex;
  }

  .approve-btn {
    background-color: #52c41a;
    border-color: #52c41a;
  }

  .reject-btn {
    background-color: #f5222d;
    border-color: #f5222d;
  }
`;

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getDoctors = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllDoctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccountStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/v1/admin/changeAccountStatus",
        { doctorId: record._id, userId: record.userId, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        const updatedDoctors = doctors.map((doctor) =>
          doctor._id === record._id ? { ...doctor, status } : doctor
        );
        setDoctors(updatedDoctors);
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    `${doctor.firstName} ${doctor.lastName}`.toLowerCase().includes(searchValue.toLowerCase())
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="actions-container">
          {((record.status === "pending") || (record.status === "rejected")) ? (
            <Button
              className="approve-btn"
              onClick={() => handleAccountStatus(record, "approved")}
            >
              Approve
            </Button>
          ) : (
            <Button
              className="reject-btn"
              onClick={() => handleAccountStatus(record, "rejected")}
            >
              Reject
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <HomePageWrapper>
      <Layout>
        <h1 className="text-center m-3">All Doctors</h1>
        <Space>
          <Input placeholder="Search by name" onChange={handleSearch} />
        </Space>
        <Table columns={columns} dataSource={filteredDoctors} />
      </Layout>
    </HomePageWrapper>
  );
};

export default Doctors;
