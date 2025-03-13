// controllers/userController.js
import User from '../models/User.js'; // Adjust path if needed

export const googleAuth = async (req, res) => {
  try {
    const { googleId, name, email, picture } = req.body;
    const user = await User.findOneAndUpdate(
      { googleId },
      { name, email, picture },
      { upsert: true, new: true }
    );
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};