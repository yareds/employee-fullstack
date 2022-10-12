const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    img: {
      data: Buffer,
      type: String,
    },
    name: {
      type: String,
      required: true,
    },

    occupation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", EmployeeSchema);
