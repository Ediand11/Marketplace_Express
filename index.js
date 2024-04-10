import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 3004;
const DB_URL =
  "mongodb+srv://ediand11:root@cluster0.rrhvmlf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("ServerStart" + 3004));
  } catch (e) {
    console.log(e);
  }
}

startApp();
