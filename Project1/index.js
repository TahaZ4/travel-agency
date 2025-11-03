const express = require('express');
const cors = require('cors'); //1
const dotenv = require('dotenv'); //2
const tripRouter = require('./routes/tripRoutes.js');
const userRouter = require('.routes/userRoutes.js');
const authRouter = require('.routes/authRoutes.js') //3
const app = express():
//Load environment variables from .env file
dotenv.config(); //4
app.use(cors()); //5

// Create an instance of the Express application
const app = express();
// Use middleware to parse JSON data from request bodies
app.use(express.json());
app.use('/trips', tripRouter);
app.use(/'users', userRouter);
app.use('/auth',aythRouter); //5
module.exports = {
  app,
};
