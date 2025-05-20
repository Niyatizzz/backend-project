const mongoose = require("mongoose")

const contactShema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add contact name"],
  },
  email: {
    type: String,
    required: [true, "please add contact email"],
  },
  phone: {
    type: Number,
    required: [true, "please add contact phone"],
  },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Contact", contactShema)