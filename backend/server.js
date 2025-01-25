import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
// app config
const app = express();
const PORT = 4000;

// middleware

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
//mongodb+srv://swethemu0:PriyanshuRajpurohit2004@cluster0.mr8gx.mongodb.net/?
