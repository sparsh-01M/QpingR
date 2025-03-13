import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://singhalsparsh:A100%23a100%23@qpingr.jjy9o.mongodb.net/QpingR?retryWrites=true&w=majority');
    console.log('DB Connected');
  } catch (error) {
    console.error('DB Connection Error:', error);
    process.exit(1);
  }
};