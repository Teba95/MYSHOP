import express from "express";
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'
import morgan from "morgan";
import cors from 'cors'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'



dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/v1/auth', authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);



app.get("/", (req,res) => {
    res.send('<h1>Welcome to ecommerce app</h1>' );
} );


const PORT = process.env.PORT || 5000;

app.listen( PORT, console.log(`server running on ${process.env.DEV_MODE} mode on port 4000` .bgCyan.white));
