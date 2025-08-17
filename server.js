const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files (HTML, CSS, JS, assets)
app.use(express.static(__dirname));

// Homepage route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ===== Sample API route =====
app.get("/api/message", (req, res) => {
  res.json({
    success: true,
    message: "Hello from the backend! 🚀",
    time: new Date().toLocaleString(),
  });
});

// ===== Example POST API route =====
app.post("/api/echo", (req, res) => {
  res.json({
    received: req.body,
    note: "This is what you sent to the backend!",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
