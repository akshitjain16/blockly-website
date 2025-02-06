import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from 'passport';
import authRoutes from './routes/auth';
import projectRoutes from './routes/projects';
import './utils/passportConfig'; // Import Passport configuration

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

export default app;