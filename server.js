const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/coffee", async (req, res) => {
  try {
    const response = await axios.get("https://coffee.alexflipnote.dev/random.json");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching coffee image:", error);
    res.status(500).json({ error: "Failed to fetch coffee image" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
