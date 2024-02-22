import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";
import axios from "axios";
import { Table, Input, Space } from "antd";
import styled from "styled-components";

const HomePageWrapper = styled.div`
  /* Styles for the entire HomePage component */
  max-width: 1350px; /* Set your desired max-width */
  margin: 0 auto; /* Center the content */
  overflow: scroll; /* Add both horizontal and vertical scrollbars if needed */
  height: 200%; /* Ensure the block takes up 100% of available height */
  padding: 20px; /* Add padding to the content if needed */
`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  //getUsers
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllUsers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // antD table col
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Doctor",
      dataIndex: "isDoctor",
      render: (text, record) => <span>{record.isDoctor ? "Yes" : "No"}</span>,
    },
    // {
    //   title: "Actions",
    //   dataIndex: "actions",
    //   render: (text, record) => (
    //     <div className="d-flex">
    //       <button className="btn btn-danger">Block</button>
    //     </div>
    //   ),
    // },
  ];

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <HomePageWrapper>
      <Layout>
        <h1 className="text-center m-2">Users List</h1>
        <Space style={{ marginBottom: 16 }}>
          <Input placeholder="Search by name" onChange={handleSearch} />
        </Space>
        <Table columns={columns} dataSource={filteredUsers} />
      </Layout>
    </HomePageWrapper>
  );
};

export default Users;
