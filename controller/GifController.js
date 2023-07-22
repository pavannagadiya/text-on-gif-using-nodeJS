const utils = require("../utils/utils");
const gifModels = require("../models/GIF");
const { messages } = require("../utils/en");

async function generateGifController(req, res) {
  try {
    const generateNewGif = await gifModels.gifGeneratorModel();

    return utils.sendResponse(
      res,
      generateNewGif.status ? 200 : 500,
      generateNewGif?.message
    );
  } catch (error) {
    console.log("error: ", error);
    utils.sendResponse(res, 500, messages.something_wrong, error);
  }
}

module.exports = {
    generateGifController
};
