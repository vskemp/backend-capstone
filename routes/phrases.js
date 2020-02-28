const express = require("express");
const router = express.Router();
const {
  phraseadd,
  phraseremove,
  phraseretrieve
} = require("../models/phrases");

router.post("/retrieve", async (req, res, next) => {
  const { account, token } = req.body;
  const response = await phraseretrieve(account, token);
  res.send(response);
});

router.post("/add", async (req, res, next) => {
  const { account, token, language, phrase, translation } = req.body;
  const response = await phraseadd(
    account,
    token,
    language,
    phrase,
    translation
  );
  res.send(response);
});

router.post("/remove", async (req, res, next) => {
  const { account, token, id } = req.body;
  const response = await phraseremove(account, token, id);
  res.send(response);
});

module.exports = router;
