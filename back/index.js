const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const convertNumberToRomainOne = require("./convertNumberToRomainOne");
const app = express();

const indexHtml = path.resolve(__dirname, "../front/index.html");
const staticFolder = path.resolve(__dirname, "../front");

app.use(bodyParser.json());
app.use("/static", express.static(staticFolder));

app.get("/", (req, res) => {
  res.sendFile(indexHtml);
});

app.post("/convertNumber", (req, res) => {
  const romainNumber = convertNumberToRomainOne(req.body.number);
  res.json({ result: romainNumber });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
