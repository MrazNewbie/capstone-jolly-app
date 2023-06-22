const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// Menggunakan express static untuk mengarahkan file frontend yang berada di dalam folder public
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/views", express.static(path.join(__dirname, "public/views")));
app.use("/public/css", express.static(path.join(__dirname, "public/css")));
app.use("/public/js", express.static(path.join(__dirname, "public/js")));
app.use(
  "/public/images",
  express.static(path.join(__dirname, "public/images"))
);
app.use("/public/maps", express.static(path.join(__dirname, "public/maps")));
app.use(
  "/public/maps_js",
  express.static(path.join(__dirname, "public/maps_js"))
);
app.use(
  "/public/maps_css",
  express.static(path.join(__dirname, "public/maps_css"))
);

//Mengarahkan setiap file html agar bisa di akses
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/index.html"));
});

app.get("/public/views/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/index.html"));
});

app.get("/public/views/mountains.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/mountains.html"));
});

app.get("/public/views/inventory.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/inventory.html"));
});

app.get("/public/views/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/login.html"));
});

app.get("/public/maps/bromo.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/maps/bromo.html"));
});

app.get("/public/maps/semeru.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/maps/semeru.html"));
});
app.listen(port, () => console.info(`Running on port ${port}`));
