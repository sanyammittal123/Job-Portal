import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: process.env.DB_NAME || "JOBDb"
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log(`Connected to database: ${DB_OPTIONS.dbName}`);
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export default connectDB;
