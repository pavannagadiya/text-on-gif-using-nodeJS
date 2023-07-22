const { messages } = require("../utils/en");
const path = require("path");
const TextOnGif = require("text-on-gif");


async function gifGeneratorModel() {
    try {
      var gif = new TextOnGif({
        file_path: path.resolve(__dirname + "/../assets/images/mr-bean-benestad.gif"),
        font_color: "black",
        font_size: "60px",
        position_y: 300,
      });
  
      await gif.textOnGif({
        text: "Pavan Nagadiya",
        get_as_buffer: false,
        write_path: path.resolve(
          __dirname + `/../public/outPutSvg/textOnGifDone.gif`
        ),
      });
      return { status: 200, message: messages.domainsAdded };
    } catch (error) {
      console.log("error: ", error);
    }
  }
  
  module.exports = {
    gifGeneratorModel
  };
  