import mongoose from "mongoose";

const connectMongo = () =>
  mongoose.connect("mongodb://localhost:27017/blogs_db");

export default connectMongo;
