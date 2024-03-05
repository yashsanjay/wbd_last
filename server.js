// Import necessary modules
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const multer = require('multer');
const Appointment = require("./models/appointmentModel"); // Adjust the path
const doctorModel = require("./models/doctorModel");
const userModel = require("./models/userModels");
const axios = require("axios");

//dotenv config
dotenv.config();

// Create a logs folder if it doesn't exist
const logsFolder = path.join(__dirname, 'logs');
if (!fs.existsSync(logsFolder)) {
  fs.mkdirSync(logsFolder);
}

// Create a write stream (in append mode) for the logs
const accessLogStream = fs.createWriteStream(path.join(logsFolder, 'access.log'), { flags: 'a' });

//mongodb connection
connectDB();

//rest object
const app = express();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.use('/uploads', express.static('uploads'));

app.post('/upload', upload.single('profileImage'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const imageUrl = `/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

//middlewares
app.use(express.json());

// Log requests to the access.log file
app.use(morgan("combined", { stream: accessLogStream }));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

app.get('/api/v1/admin/getAllAppointments', async (req, res) => {
  try {
    const allAppointments = await Appointment.find().lean();
    const appointmentsWithData = await Promise.all(
      allAppointments.map(async (appointment) => {
        const doctor = await doctorModel.findOne({ _id: appointment.doctorId });

        // Update doctor statistics
        // if (doctor) {
        //   doctor.totalAppointments += 1;
        //   doctor.weeklyAppointments += 1;  // You can update this logic based on your requirements
        //   doctor.monthlyAppointments += 1; // You can update this logic based on your requirements
        //   await doctor.save();
        // }

        const user = await userModel.findOne({ _id: appointment.userId }).lean();

        return {
          ...appointment,
          doctorName: doctor ? `${doctor.name} ${doctor.lastName}` : 'Unknown Doctor',
          patientName: user ? user.name : 'Unknown User',
        };
      })
    );

    res.json({ success: true, data: appointmentsWithData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching appointments' });
  }
});

// app.get('/api/v1/admin/getDoctorStatistics', async (req, res) => {
//   try {
//     const doctors = await doctorModel.find().lean();
    
//     const doctorStatistics = doctors.map(doctor => ({
//       doctorName: `${doctor.name} ${doctor.lastName}`,
//       totalAppointments: doctor.totalAppointments, // Add this field to your doctor model
//       weeklyAppointments: doctor.weeklyAppointments, // Add this field to your doctor model
//       monthlyAppointments: doctor.monthlyAppointments, // Add this field to your doctor model
//     }));

//     res.json({ success: true, data: doctorStatistics });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Error fetching doctor statistics' });
//   }
// });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

//port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
  const serverMessage = `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`;
  console.log(serverMessage.bgCyan.white);

  // Log to local storage
  if (typeof window !== 'undefined') {
    localStorage.setItem('serverMessage', serverMessage);
  }
});
