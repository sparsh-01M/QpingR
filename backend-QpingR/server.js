import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import partnerRoutes from './routes/partnerRoutes.js';
import siteContentRoutes from './routes/siteContentRoutes.js'; // Add this
const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the QpingR API');
});

// Routes
app.use('/api/partners', partnerRoutes);
app.use('/api/site-content', siteContentRoutes); // Add this

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () =>
  console.log(`Server started on https://qpingr.onrender.com`)
);

  } catch (error) {
    console.error('Server failed to start:', error);
  }
};

startServer();



// // server.js (updated for port 4000 with Google auth)
// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import userRoutes from './routes/userRoutes.js'; // Add this
// import partnerRoutes from './routes/partnerRoutes.js';
// import siteContentRoutes from './routes/siteContentRoutes.js';

// const app = express();
// const port = 4000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the QpingR API');
// });

// // Routes
// app.use('/api', userRoutes);              // Add this for Google auth
// app.use('/api/partners', partnerRoutes);
// app.use('/api/site-content', siteContentRoutes);

// // MongoDB Connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/combined-app', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection failed:', error);
//     process.exit(1);
//   }
// };

// // Start server
// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
//   } catch (error) {
//     console.error('Server failed to start:', error);
//   }
// };

// startServer();
