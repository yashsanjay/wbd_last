// import React, { useState, useEffect } from "react";
// import Layout from "./../../components/Layout";

// import axios from "axios";

// import moment from "moment";
// import { message, Table } from "antd";

// const DoctorAppointments = () => {
//   const [appointments, setAppointments] = useState([]);

//   const getAppointments = async () => {
//     try {
//       const res = await axios.get("/api/v1/doctor//doctor-appointments", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (res.data.success) {
//         setAppointments(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAppointments();
//   }, []);

//   const handleStatus = async (record, status) => {
//     try {
//       const res = await axios.post(
//         "/api/v1/doctor/update-status",
//         { appointmentsId: record._id, status },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       if (res.data.success) {
//         message.success(res.data.message);
//         getAppointments();
//       }
//     } catch (error) {
//       console.log(error);
//       message.error("Something Went Wrong");
//     }
//   };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "_id",
//     },
//     {
//       title: "Date & Time",
//       dataIndex: "date",
//       render: (text, record) => (
//         <span>
//           {moment(record.date).format("DD-MM-YYYY")} &nbsp;
//           {moment(record.time).format("HH:mm")}
//         </span>
//       ),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//     },
//     {
//       title: "Actions",
//       dataIndex: "actions",
//       render: (text, record) => (
//         <div className="d-flex">
//           {record.status === "pending" && (
//             <div className="d-flex">
//               <button
//                 className="btn btn-success"
//                 onClick={() => handleStatus(record, "approved")}
//               >
//                 Approved
//               </button>
//               <button
//                 className="btn btn-danger ms-2"
//                 onClick={() => handleStatus(record, "reject")}
//               >
//                 Reject
//               </button>
//             </div>
//           )}
//         </div>
//       ),
//     },
//   ];
//   return (
//     <Layout>
//       <h1>Appoinmtnets Lists</h1>
//       <Table columns={columns} dataSource={appointments} />
//     </Layout>
//   );
// };

// export default DoctorAppointments;

import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout";
import axios from "axios";
import moment from "moment";
import { message, Table, Spin } from "antd";

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loadingUserDetails, setLoadingUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState({});

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

  useEffect(() => {
    getAppointments();
  }, []);

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
    <Layout >
      <h1>Appointments Lists</h1>
     
     <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "100vh" ,minWidth:"1000px"}}>
     {loadingUserDetails ? (
        <Spin size="large" />
      ) : (
        <Table columns={columns} dataSource={appointments} style={{minWidth:"75vw"}}/>
      )}
     </div>
    </Layout>
  );
};

export default DoctorAppointments;

