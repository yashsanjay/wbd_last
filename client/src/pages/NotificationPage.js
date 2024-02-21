import React from "react";
import Layout from "./../components/Layout";
import { message, Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CloseOutlined } from "@ant-design/icons";
import "./NotificationPage.css"; // Import your custom CSS file

const NotificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  // Handle read notification
  const handleMarkAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/get-all-notification",
        {
          userId: user._id,
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
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };

  // Delete notifications
  const handleDeleteAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/delete-all-notification",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong In Notifications");
    }
  };

  return (
    <Layout>
      <div className="notification-container">
        <h4 className="notification-header text-center p-3">Notification Page</h4>
        <Tabs>
          <Tabs.TabPane tab="Unread" key={0}>
            <div className="notification-actions">
              <h4 className="mark-all-read" onClick={handleMarkAllRead}>
                Mark All Read
              </h4>
            </div>
            {user?.notifcation.map((notificationMgs) => (
              <div className="notification-card" key={notificationMgs.id}>
                <div
                  className="notification-text"
                  onClick={() => navigate(notificationMgs.onClickPath)}
                >
                  {notificationMgs.message}
                </div>
              </div>
            ))}
          </Tabs.TabPane>
          <Tabs.TabPane tab="Read" key={1}>
            <div className="notification-actions">
              <h4
                className="delete-all-read text-primary"
                onClick={handleDeleteAllRead}
              >
                Delete All Read
              </h4>
            </div>
            {user?.seennotification.map((notificationMgs) => (
              <div className="notification-card" key={notificationMgs.id}>
                <div
                  className="notification-text"
                  onClick={() => navigate(notificationMgs.onClickPath)}
                >
                  {notificationMgs.message}
                </div>
              </div>
            ))}
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default NotificationPage;
