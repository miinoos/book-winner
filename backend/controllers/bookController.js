const Book = require("../models/bookModel");
const mongoose = require("mongoose");

const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 });
  res.status(200).json(books);
};

const createBook = async (req, res) => {
  const { cover, title, rating, review } = req.body;
  let emptyFields = [];
  if (!cover) {
    emptyFields.push("cover");
  }
  if (!title) {
    emptyFields.push("title");
  }
  if (!rating) {
    emptyFields.push("rating");
  }
  if (!review) {
    emptyFields.push("review");
  }
  if (emptyFields.length > 0) {
    //checking for all the fields in the form
    return res
      .status(400)
      .json({ error: "Please fill all the fields", emptyFields });
  }
  if (rating > 5 || rating < 0) {
    //checking is the rating is correct
    return res
      .status(400)
      .json({ error: "Rating Should be given between 0 and 5", emptyFields });
  }
  try {
    const book = await Book.create({ cover, title, rating, review });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message, emptyFields });
  }
};

module.exports = { getBooks, createBook };
