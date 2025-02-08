const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// ✅ Default Route (Fix for "Cannot GET /")
app.get("/", (req, res) => {
    res.send("🚀 Server is running!");
});

app.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
