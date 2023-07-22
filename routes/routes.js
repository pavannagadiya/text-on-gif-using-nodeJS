const express = require("express");
const router = express.Router();
const GifController = require("../controller/GifController");

router.post(
    "/generate-nft-svg",
    GifController.generateGifController
  );

  module.exports = router;