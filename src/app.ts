import "dotenv/config";
import express from "express";
import { connectDatabase } from "@/config/database.js";
import healthRoutes from "@/routes/health.routes.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/", healthRoutes);

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
