const mongoose=require('mongoose')
const express=require('express')
const cors = require('cors');
const dotenv=require('dotenv').config(); 
const port=process.env.PORT

const app = express();
app.use(express.json());
app.use(cors());
console.log(dotenv)
mongoose.connect(process.env.MONGODB_URI,
    console.log("Connected to MongoDB")
)
app.use('/api',require("./Routes/form"))
app.listen(port, () => {
    console.log(`Server is running ${[port]}`);
  });