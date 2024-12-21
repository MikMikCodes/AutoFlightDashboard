const express = require("express");
const cors = require("cors");
const flightRoutes = require("./routes/flightRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/flights", flightRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
