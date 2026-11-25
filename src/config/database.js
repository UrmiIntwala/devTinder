const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://intwalaurmi_db_user:fIAFeKm94y3MfVcy@namastenode.ljyurq3.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
