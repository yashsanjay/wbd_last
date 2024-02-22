import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { message, DatePicker, TimePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import styled from "styled-components";
import moment from "moment";

// Define a styled component for HomePage
const HomePageWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  overflow: scroll;
  height: 200%;
  padding: 20px;
`;

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById",
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAvailability = async () => {
    try {
      dispatch(showLoading());
      const formattedDate = moment(date, "YYYY-MM-DD").format("DD-MM-YYYY");

      if (moment(formattedDate, "DD-MM-YYYY").isBefore(moment(), "day")) {
        dispatch(hideLoading());
        return message.error("Please select a future date for booking.");
      }

      const selectedDateTime = moment(`${formattedDate} ${time}`, "DD-MM-YYYY HH:mm");
      if (selectedDateTime.isBefore(moment())) {
        dispatch(hideLoading());
        return message.error("Please select a future time for booking.");
      }

      const res = await axios.post(
        "/api/v1/user/booking-availbility",
        { doctorId: params.doctorId, date: formattedDate, time },
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
    }
  };

  const handleBooking = async () => {
    try {
      if (!date || !time) {
        return message.error("Date & Time are required");
      }

      const formattedDate = moment(date, "YYYY-MM-DD").format("DD-MM-YYYY");

      if (moment(formattedDate, "DD-MM-YYYY").isBefore(moment(), "day")) {
        dispatch(hideLoading());
        return message.error("Please select a future date for booking.");
      }

      const selectedDateTime = moment(`${formattedDate} ${time}`, "DD-MM-YYYY HH:mm");
      if (selectedDateTime.isBefore(moment())) {
        dispatch(hideLoading());
        return message.error("Please select a future time for booking.");
      }

      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctors,
          userInfo: user,
          date: formattedDate,
          time,
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
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAvailability();
  };

  return (
    // <HomePageWrapper>
    <Layout>
      <h3>Booking Page</h3>
      <div className="container m-2">
        {doctors && (
          <div>
            <h4>
              Dr.{doctors.firstName} {doctors.lastName}
            </h4>
            <h4>Fees : {doctors.feesPerCunsaltation}</h4>
            <h4>
              Timings : {doctors.timings && doctors.timings[0]} -{" "}
              {doctors.timings && doctors.timings[1]}{" "}
            </h4>
            <form onSubmit={handleFormSubmit}>
              <div className="d-flex flex-column w-200">
                <input
                  type="date"
                  className="m-2"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  className="mt-3"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />

                <button
                  type="submit"
                  className="btn btn-primary mt-2"
                >
                  Check Availability
                </button>
              </div>
            </form>
            <button
              className="btn btn-dark mt-2"
              onClick={handleBooking}
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </Layout>
    // </HomePageWrapper>
  );
};

export default BookingPage;
