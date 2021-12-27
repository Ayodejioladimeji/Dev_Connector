const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoUri');

// connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log('MongoDB Connected ...');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
