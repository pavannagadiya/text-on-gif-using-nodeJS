const express = require("express");
const app = express();
const dotenv = require("dotenv");
const config = require("./config/config").config();
dotenv.config({ path: config });
const router = require("./routes/routes");
const cors = require("cors");
var http = require("http").Server(app);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("assets"));
app.use(express.static("public"));
app.use("/gifimages", express.static("public/outPutSvg/"));
app.use(cors());

app.use("/", router);


const port = process.env.PORT || "3000";
http.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});