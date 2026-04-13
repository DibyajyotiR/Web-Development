const express = require("express");
const mongoose = require("mongoose");
const dotenv=require("dotenv")
const cors = require("cors");
const allRoutes=require("./routes/allRoutes")
const PORT =8000

const app = express();

dotenv.config()
// 🔌 Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.use(cors());
app.use(express.json());
app.use('/api',allRoutes)    //   /api/messages/getmessages


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));