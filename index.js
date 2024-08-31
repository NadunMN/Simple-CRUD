const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel"); // Ensure the path is correct
const productRoute = require("./routes/productRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server is running on port 3000"); // Fixed typo here
});

//routes
app.use("/api/products", productRoute);

 app.get("/", (req, res) => {
  res.send("Hello from Node API bla bla bla");
});

mongoose
  .connect(
    "mongodb+srv://nadunmadusanka:Sa0RxyFaP5dSnNbr@backend.bjxji.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected to database!"); // Fixed typo here
  })
  .catch(() => {
    console.log("Connection failed!");
  });
