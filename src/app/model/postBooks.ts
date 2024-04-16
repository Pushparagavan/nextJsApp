import { Schema, model, models } from "mongoose";

const booksSchema = new Schema({
  title: String,
  description: String,
  image: String
});

const BooksModel = models.Books || model("Books", booksSchema);

export default BooksModel;
