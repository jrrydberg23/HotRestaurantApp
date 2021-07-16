const express = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = 3000;

// Routes

// Homepage route
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "home.html")));
// Tables route
app.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "tables.html"))
);
// Reservations route
app.get("/reserve", (req, res) =>
  res.sendFile(path.join(__dirname, "reserve.html"))
);
// Reservation POST
app.post("/api/characters", (req, res) => {
    const newReservation = req.body;
    tables.push(newReservation);
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
