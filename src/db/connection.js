const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  console.log(process.env);
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("successfully connected to Cluster0");
  } catch (error) {
    console.log(error);
  }
};
connection();
