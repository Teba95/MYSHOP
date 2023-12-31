import mongoose from 'mongoose';



const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  Comment: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})


const productSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      reviews:[reviewSchema],
      rating: {
        type: Number,
        required: true,
        default: 0,
      },
      photo: {
        type: String,
        require:true,
      },
      numReviews: {
        type: Number,
        require:true,
        default: 0,
      },
    },
    { timestamps: true }
  );
  
const Product = mongoose.model('Product', productSchema);

  export default Product;