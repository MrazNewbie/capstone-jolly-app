const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// Menggunakan express static untuk mengarahkan file frontend yang berada di dalam folder public
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/css", express.static(path.join(__dirname, "public/css")));
app.use("/public/js", express.static(path.join(__dirname, "public/js")));
app.use(
  "/public/images",
  express.static(path.join(__dirname, "public/images"))
);

//Mengarahkan setiap file html agar bisa di akses
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/public/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/public/mountains.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/mountains.html"));
});

app.get("/public/inventory.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/inventory.html"));
});

app.get("/public/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/login.html"));
});

app.get("/public/bromo.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/bromo.html"));
});
app.listen(port, () => console.info(`Running on port ${port}`));
