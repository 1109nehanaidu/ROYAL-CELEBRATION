const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  eventType: String,
  date: String,
  time: String,
  address: String,
  specialRequest: String,
  image: String,
  paymentStatus: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);
