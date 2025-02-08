require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Replace this with your API Key (or use web scraping)
const API_KEY = "your_api_key_here"; // Get from SimilarSites API

app.post("/find-similar", async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        const response = await axios.get(`https://api.similarsites.com/v1/sites?key=${API_KEY}&url=${url}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch similar sites" });
    }
});

app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
