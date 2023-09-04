const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const port =  process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
// console.log(dotenv)
  


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
   
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use('/api', require("./Routes/form"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
