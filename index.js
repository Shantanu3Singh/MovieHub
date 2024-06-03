const express = require("express");
const app = express();
const Mongoose = require("mongoose");
const AuthRoutes=require("./Routes/Auth")
const cors=require("cors")

Mongoose.connect("mongodb://127.0.0.1:27017/MOVIES")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(express.urlencoded({extended:true}));
  app.use(express.json());
  app.use(cors())




app.use(AuthRoutes);

let PORT = 8085;
app.listen(PORT, (req, res) => {
  console.log(`Server Connected at ${PORT} Successfully`);
});
