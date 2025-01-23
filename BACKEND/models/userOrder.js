const { Schema, model } = require("mongoose");
const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Removes extra spaces
    },
    bagNumber: {
      type: Number,
      required: true,
    },
    buildingName: {
      type: String,
      required: true,
    },
    roomNumber: {
      type: String,
      required: true,
    },
    numberOfClothes: {
      type: Number,
      required: true,
      min: 1, // Minimum of 1 cloth
    },
    weight: {
      type: Number,
      required: true,
      min: 0, // Minimum weight should not be negative
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the order creation time
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed", "Delivered"], // Optional status field
      default: "Pending",
    },
  },
  {
    collection: "orders", // Explicitly set the collection name if needed
  }
);

module.exports = model("Order", orderSchema);
