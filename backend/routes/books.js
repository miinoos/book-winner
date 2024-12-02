const express = require("express");
const { model } = require("mongoose");

const router = express.Router();

const {getBooks, createBook} = require("../controllers/bookController");

router.get("/", getBooks);

router.post("/", createBook);

module.exports = router;
