const Book = require("../models/bookModel");
const mongoose = require("mongoose");

const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 });
  res.status(200).json(books);
};

const createBook = async (req, res) => {
  const { cover, title, rating, review } = req.body;
  try {
    const book = await Book.create({ cover, title, rating, review });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getBooks, createBook };
