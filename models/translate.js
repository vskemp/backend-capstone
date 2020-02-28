const axios = require("axios");

translate = async (language, message) => {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?target=${language}&key=${
        process.env.KEY
      }&q=${encodeURI(message)}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

module.exports = translate;
