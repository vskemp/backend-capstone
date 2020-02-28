const db = require("./conn"),
  { tokenCheck } = require("./user");

phraseadd = async (account, token, language, phrase, translation) => {
  try {
    const user = await tokenCheck(token, account);
    const id = user.id;

    db.none(
      `INSERT INTO phrases_id${id} (language, phrase, translation) VALUES ($1, $2, $3)`,
      [language, phrase, translation]
    );
  } catch (err) {
    return err;
  }
};

phraseremove = async (account, token, id) => {
  try {
    const user = await tokenCheck(token, account);
    db.none(`DELETE FROM phrases_id${user.id} WHERE id=${id};`);
  } catch (err) {
    return err;
  }
};

phraseretrieve = async (account, token) => {
  try {
    const user = await tokenCheck(token, account);
    const response = await db.any(`SELECT * FROM phrases_id${user.id}`);
    return response;
  } catch (err) {
    return err;
  }
};




module.exports = {
  phraseadd,
  phraseremove,
  phraseretrieve
};
