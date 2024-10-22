// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Welcome to the Personal Expense Tracker API");
});

// Define a messages route
app.get("/messages", (req, res) => {
  res.send("Hello");
});

// Universal route for handling undefined routes
app.get("*", (req, res) => {
  res.status(404).send("404 URL NOT FOUND");
});

// Set the application to listen on a specific port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});