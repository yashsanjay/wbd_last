import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  console.log(doctors);
  const [date, setDate] = useState("");
  console.log(date);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [bookedSlotsMap, setBookedSlotsMap] = useState([]);
  console.log(bookedSlotsMap);
  const [description, setDescription] = useState("");
  const [appointments, setAppointments] = useState([]);

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
        setBookedSlotsMap(res.data.data.bookedSlotsMap || {});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/doctor/doctor-appointmentss", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          doctorId: params.doctorId
        }
      });
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    getAppointments();
  }, []);

  const getBookedSlots = () => {
    const bookedMap = {};
    appointments.forEach(appointment => {
      const formattedDate = moment(appointment.date).format("DD-MM-YYYY");
      if (!bookedMap[formattedDate]) {
        bookedMap[formattedDate] = [];
      }
      bookedMap[formattedDate].push(moment(appointment.time).format("HH:mm"));
    });
    console.log(bookedMap);
    setBookedSlotsMap(bookedMap);
  };

  useEffect(() => {
    getBookedSlots();
  }, [appointments]);

  const handleAvailability = () => {
    if (!date || !selectedSlot) {
      return message.error("Please select both date and time slot.");
    }

    const formattedDate = moment(date, "YYYY-MM-DD").format("DD-MM-YYYY");

    if (bookedSlotsMap[formattedDate]?.includes(selectedSlot)) {
      message.warning("This slot is already booked.");
    } else {
      message.success("Slot is available.");
    }
  };

  const handleBooking = async () => {
    try {
      if (!date || !selectedSlot || !description) {
        return message.error("Date, Time slot, and Description are required");
      }

      const formattedDate = moment(date, "YYYY-MM-DD").format("DD-MM-YYYY");

      if (bookedSlotsMap[formattedDate]?.includes(selectedSlot)) {
        return message.warning("This slot is already booked.");
      }

      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctors,
          userInfo: user,
          date: formattedDate,
          time: selectedSlot,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        message.success(res.data.message);
        // Update the bookedSlotsMap state with the newly booked slot
        setBookedSlotsMap({
          ...bookedSlotsMap,
          [formattedDate]: [
            ...(bookedSlotsMap[formattedDate] || []),
            selectedSlot,
          ],
        });
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAvailability();
  };

  const timeSlots = [
    "09:00", "09:20", "09:40",
    "10:00", "10:20", "10:40",
    "11:00", "11:20", "11:40",
    "13:00", "13:20", "13:40",
    "14:00", "14:20", "14:40",
    "15:00", "15:20", "15:40",
    "17:00", "17:20", "17:40",
    "18:00", "18:20", "18:40",
    "19:00", "19:20", "19:40",
  ];

  return (
    <Layout>
    
      <h3 style={{ textAlign: 'center', fontWeight: 'bold', color: 'black', paddingTop: '15px', paddingBottom: '15px', backgroundColor:"#005b6d", color:"#ffffff" }}>Booking Page</h3>
      <div style={{minHeight:'73vh'}} className="container m-2" >
        {doctors && (
          <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', margin: '20px', border: '1px solid #ddd'}}>
            <h4 style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0)', margin: '20px', border: '1px solid #0000' }}>
              Dr.{doctors.firstName} {doctors.lastName}
            </h4>
            <h4 style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0)', margin: '20px', border: '1px solid #0000' }}>Fees : {doctors.feesPerCunsaltation}</h4>
            <h4 style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0)', margin: '20px', border: '1px solid #0000' }}>
              Timings : {doctors.timings && doctors.timings[0]} -{" "}
              {doctors.timings && doctors.timings[1]}{" "}
            </h4>
            <form onSubmit={handleFormSubmit}>
              <div className="d-flex flex-column w-200" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0)', margin: '10px', border: '1px solid #0000' }}>
                <input
                  type="date"
                  className="m-2"
                  value={date}
                  min={moment().format("YYYY-MM-DD")}
                  onChange={(e) =>{ 
                    console.log(e.target.value);
                    setDate(e.target.value)}}
                />

        {/* <div className="practo-time-slots">
          {timeSlots.map((slot, index) => {
            // console.log(date);
            const formattedDate = moment(date, "YYYY-MM-DD").format("DD-MM-YYYY");
            // console.log(formattedDate);
            const isBooked = bookedSlotsMap[formattedDate]?.includes(slot);
            console.log(bookedSlotsMap);
            // console.log(bookedSlotsMap[formattedDate]?.includes(slot));
            return (
              <button
                key={index}
                className={`practo-slot ${isBooked ? 'booked' : ''}`}
                onClick={() => setSelectedSlot(slot)}
                disabled={isBooked}
              >
                {isBooked ? 'Booked' : slot}
              </button>
            );
          })}
        </div> */}
   <div className="practo-time-slots">
    {date && <h1>Avaliable slots</h1>}
  {date && timeSlots.map((slot, index) => {
    const formattedDate = moment(date, "YYYY-MM-DD").format("DD-MM-YYYY");
    const isBooked = bookedSlotsMap[formattedDate]?.includes(slot);

    // Show the slot only if it's not booked
    if (!isBooked) {
      return (
        
        <button
          key={index}
          className="practo-slot"
          onClick={() => setSelectedSlot(slot)}
        >
          {slot}
        </button>
      );
    } else {
      return null; // If booked, don't render the button
    }
  })}
</div>




                <textarea
                  placeholder="Describe your symptoms..."
                  className="mt-3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button
                className="btn btn-dark mt-2"
                onClick={handleBooking}
                style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0)', margin: '10px', width:'300px' , border: '1px solid #0000' }}
              >
                Book Now
              </button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
