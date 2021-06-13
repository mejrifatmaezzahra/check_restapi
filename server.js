const express = require("express");
const app = express();
const path = require("path");
const User = require("./models/User");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
  });
app.use(express.urlencoded({ extended: true }));

// Add a user
app.post("/", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((data) => {
      res.send(daa);
    })
    .catch((err) => {
      res.send(err);
    });
});

// GET ALL USERS

app.get("/users", (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//GET USER BY ID

app.get("/users/:id", (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// UPDATE USER BY ID
app.put("/users/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});
// DELETE USER
app.delete("/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .the((data) => {
      res.send("user deleted", data);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.listen(3000, () => {
  console.log("server running");
});