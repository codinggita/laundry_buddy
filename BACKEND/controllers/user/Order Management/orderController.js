const Order = require("../../../models/userOrder");

const submitOrder = async (req, res) => {
  try {
    const { name, bagNumber, buildingName, roomNumber, numberOfClothes, weight, userId } = req.body;

    // Check if bagNumber already exists
    const existingOrder = await Order.findOne({ bagNumber });
    if (existingOrder) {
      return res.status(400).json({ message: 'Order with this bag number already exists.' });
    }

    // Create a new order and associate it with the user's ID
    const newOrder = new Order({
      userId,  // Link the order to the user by userId
      name,
      bagNumber,
      buildingName,
      roomNumber,
      numberOfClothes,
      weight,
    });

    // Save the order to the database
    await newOrder.save();

    res.status(201).json({ message: 'Order submitted successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit order', error: error.message });
  }
};



// Get all orderes with number of  orders

const getAllOrdersAndTotalNumber = async (req, res) => {
  try {
    // Fetch all orders from the database
    const orders = await Order.find({});
    
    // Count the total number of orders
    const totalOrders = orders.length;

    // Respond with the fetched data and the total number of orders
    res.status(200).json({
      totalOrders,
      orders
    });
  } catch (error) {
    // Respond with error if the fetch fails
    res.status(500).json({
      message: 'Failed to fetch orders and count total',
      error: error.message,  // Send the error message to the client
    });
  }
};

const getAllPendingOrdersAndTotalNumber = async (req, res) => {
  try {
    // Fetch orders with status "pending"
    const pendingOrders = await Order.find({ status: 'Pending' });

    // Count the total number of pending orders
    const totalPendingOrders = pendingOrders.length;

    // Respond with the fetched data and total number of pending orders
    res.status(200).json({
      totalPendingOrders,
      pendingOrders
    });
  } catch (error) {
    // Respond with error if the fetch fails
    res.status(500).json({
      message: 'Failed to fetch pending orders',
      error: error.message,  // Send the error message to the client
    });
  }
};
const getAllCompletedOrdersAndTotalNumber = async (req, res) => {
  try {
    // Fetch orders with status "pending"
    const completedOrders = await Order.find({ status: 'Completed' });

    // Count the total number of pending orders
    const totalCompletedOrders = completedOrders.length;

    // Respond with the fetched data and total number of pending orders
    res.status(200).json({
      totalCompletedOrders,
      completedOrders
    });
  } catch (error) {
    // Respond with error if the fetch fails
    res.status(500).json({
      message: 'Failed to fetch pending orders',
      error: error.message,  // Send the error message to the client
    });
  }
};

const deleteOrderBybagNumber = async (req,res) => {
const {bagNumber}=req.params
  try{
    const deleteOrder = await Order.findOneAndDelete({bagNumber})
  
  if(!deleteOrder){
    res.status(404).json({message:"Order not found"})
  }
  res.status(200).json({
    message: "Order deleted successfully",
    order:deleteOrder
  })
}
catch(error){
  res.status(500).json({
    message:"Failed to delete Order",
    error:error.message
  })
}
};


module.exports = {submitOrder, getAllOrdersAndTotalNumber, getAllPendingOrdersAndTotalNumber,getAllCompletedOrdersAndTotalNumber,deleteOrderBybagNumber };
