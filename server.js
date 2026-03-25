const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",   // change if you have password
    database: "fitness_db"
});

// Connect to DB
db.connect((err) => {
    if (err) {
        console.log("Database connection error:", err);
    } else {
        console.log("Connected to MySQL ✅");
    }
});

// API to save data
app.post("/add", (req, res) => {
    const { name, steps, calories } = req.body;

    const sql = "INSERT INTO records (name, steps, calories) VALUES (?, ?, ?)";

    db.query(sql, [name, steps, calories], (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error saving data ❌");
        } else {
            res.send("Data saved successfully ✅");
        }
    });
});

// API to get all data (optional but useful 🔥)
app.get("/records", (req, res) => {
    const sql = "SELECT * FROM records";

    db.query(sql, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

// Start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000 🚀");
});