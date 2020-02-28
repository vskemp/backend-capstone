const express = require("express");
const router = express.Router();
const translate = require("../models/translate");

router.post("/do", async (req, res, next) => {
  const { language, message } = req.body;
  const response = await translate(language, message);
  res.send(response);
});


module.exports = router;
