const Order = require("../../../models/userOrder");
const mongoose = require('mongoose')

const submitOrder = async (req, res) => {
  try {
    const {  numberOfClothes, weight } = req.body;

      const userId = req.user.userId;
    
    // Create a new order and associate it with the user's ID
    const newOrder = new Order({
      userId,  // Link the order to the user by userId
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

const getOrderSummary = async (req, res) => {
  try {
    console.log("Extracted User ID:", req.user.userId);
    console.log("type of User ID:", typeof req.user.userId);

    const userId =  new mongoose.Types.ObjectId(req.user.userId);
   const orders = await Order.find({userId}).sort({createdAt : -1})

   if(!orders || orders.length === 0 ){
    return res.status(404).json({message:"No order found"});
   }

  //  Pending order
    const pendingOrders = await Order.find({status:"Pending"})

  //  length of pending order
    const lengthOfPending = pendingOrders.length;

  //  Completed order
    const completeOrders = await Order.find({status:"Pending"})

  //  length of completed order
    const lengthOfComplete = completeOrders.length;
    
   const formattedOrders = orders.map(order => ({
    orderId: order._id,
    numberOfClothes: order.numberOfClothes,
    weight: order.weight,
    status: order.status,
    createdAt: new Date(order.createdAt).toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
}));

res.status(200).json({
  lengthOfPending,
  lengthOfComplete,
  order:formattedOrders
})


  } catch (error) {
    // Respond with error if the fetch fails
    res.status(500).json({
      message: 'Failed to fetch orders',
      error: error.message,  // Send the error message to the client
    });
  }
};



module.exports = {submitOrder, getOrderSummary };
