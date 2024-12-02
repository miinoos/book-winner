const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/books");

dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/books", bookRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`App Server Started At : ${process.env.PORT}`);
    });
    console.log("Connected To The Database");
  })
  .catch((err) => {
    console.log(err);
  });
