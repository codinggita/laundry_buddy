const Order = require("../models/userOrder");

const submitOrder = async (req, res) => {
  try {
    // Destructure fields from the request body
    const {
      name,
      bagNumber,
      buildingName,
      roomNumber,
      numberOfClothes,
      weight,
    } = req.body;

    // Input validation (optional but recommended)
    if (
      !name ||
      !bagNumber ||
      !buildingName ||
      !roomNumber ||
      !numberOfClothes ||
      !weight
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new order object using the provided data
    const newOrder = new Order({
      name,
      bagNumber,
      buildingName,
      roomNumber,
      numberOfClothes,
      weight,
    });

    // Save the new order to the database
    await newOrder.save();

    // Respond with success
    res.status(201).json({
      message: "Order submitted successfully",
      order: newOrder,
    });
  } catch (error) {
    // Respond with error if the save fails
    res.status(500).json({
      message: "Failed to submit order",
      error: error.message, // Send the error message to the client
    });
  }
};



// Get all orderes

const getAllOrders = async (req, res) => {
  try {
    // Fetch all orders from the database
    const orders = await Order.find({});

    // Respond with the fetched data
    res.status(200).json(orders);
  } catch (error) {
    // Respond with error if the fetch fails
    res.status(500).json({
      message: "Failed to fetch orders",
      error: error.message, // Send the error message to the client
    });
  }
};



const getTotalNumberOfOrders = async (req, res) => {
  try {
    // Count the total number of orders in the collection
    const totalOrders = await Order.countDocuments({});

    // Respond with the total number of orders
    res.status(200).json({ totalOrders });
  } catch (error) {
    // Respond with error if the count fails
    res.status(500).json({
      message: 'Failed to count orders',
      error: error.message,  // Send the error message to the client
    });
  }
};




module.exports = {submitOrder, getAllOrders,getTotalNumberOfOrders };
