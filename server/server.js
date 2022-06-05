require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require('./routes/userRouter.js');
const entryRouter = require('./routes/entryRouter.js');

const app = express();
/* express.json()  parses incoming JSON requests and puts the parsed data in req.body.
 Without `express.json()`, `req.body` is undefined.*/
app.use(express.json());
/* The Same Origin Policy is an important security measure that basically says
 “Only requests from the same origin (the same IP address or URL) should be allowed to access this API”.
 So we need to enable Cors */
app.use(cors());

// Routes
// ******Get request from Client******
app.use('/users', userRouter);
app.use('/api/entries', entryRouter);

// Listen Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, (err) => {
  if (err) throw err;
  console.log('Connected to MongoDB');
});
