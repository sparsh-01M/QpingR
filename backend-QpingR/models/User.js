// models/user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  picture: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);