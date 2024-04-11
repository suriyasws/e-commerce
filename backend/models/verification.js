const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
}, { timestamps: true });

yourSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

const otp = mongoose.model('otps', yourSchema);

module.exports=otp;