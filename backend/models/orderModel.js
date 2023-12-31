import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type : mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'user',
    },
    orderItems: [
      {
        name: {type: String, required: true},
        qty : {type: Number, required: true},
        price: {type: Number, required: true},
        photo: {type: String, required: true},
        product:{
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingAdress:{
      adress: {type: String, required: true},
      city : {type: String, required: true},
      postalCode : {type: String, required: true},
      country: {type: String, required: true},
    },
    paymentResult: {
      id: { type: String,},
      status: {type: String,},
      email: {type: String,},
      update_time: {type: String,},
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    shippingPrice:{
      type: Number,
      required: true,
      default: 0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;