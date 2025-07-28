//* Import necessary modules
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


//* Import the router from the routes folder
import dbConnect from './config/mongoose.config.js';
import clientRouter from './routes/client.routes.js'



const app = express()

//* Configure the middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true           
}));


//* Load the server port from environment variables
dotenv.config();


//* Retrives the server port from .env
const PORT = process.env.PORT;


//* Connect to the MONGODB database
dbConnect();

//* Add main routes for app running
app.use("/api/v1/client", clientRouter);  //* Nom de domaine de l'API du client

//* Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); // Log server URL to the console
  });
  