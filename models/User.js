const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: Number,
  favoriteFood: [
    {
      type: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);
mongoose.model.exports = User;