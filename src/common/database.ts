import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`Connected to ${process.env.MONGODB_URI}!`);
  } catch (e) {
    console.error('DB connection error:', e);
  }
};
