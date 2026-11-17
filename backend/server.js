const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
    res.send("Node.js Backend is Running!");
});

// Sample API
app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "Rahul" },
        { id: 2, name: "Amit" },
        { id: 3, name: "Priya" }
    ]);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});