// userOrder.js
const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bagNumber: {
      type: Number,
      required: true,
      unique: true,
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
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Completed', 'Delivered'],
      default: 'Completed',
    },
  },
  {
    collection: 'orders',
  }
);

module.exports = model('Order', orderSchema);
