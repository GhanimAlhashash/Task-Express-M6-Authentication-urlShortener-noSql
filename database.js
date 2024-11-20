const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb+srv://GhanimAlhashash:raphsidion@cluster0.mhgiv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
