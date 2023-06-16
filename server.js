const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.use("/public/css", express.static(path.join(__dirname, "public/css")));
app.use("/public/js", express.static(path.join(__dirname, "public/js")));
app.use(
  "/public/images",
  express.static(path.join(__dirname, "public/images"))
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => console.info(`Berjalan di port ${port}`));
