const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS to handle requests from different origins
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' folder (for Vercel)
app.use(express.static(path.join(__dirname, "public")));

// Define the API route to get the random coffee image
app.get("/api/coffee", async (req, res) => {
  try {
    // Fetch the random coffee image from the external API
    const response = await axios.get("https://coffee.alexflipnote.dev/random.json");
    
    // Send the data from the external API to the frontend
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching coffee image:", error);
    res.status(500).json({ error: "Failed to fetch coffee image" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
