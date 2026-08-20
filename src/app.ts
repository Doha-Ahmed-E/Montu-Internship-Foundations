import "dotenv/config";
import "@/types/express.js";
import express from "express";
import { connectDatabase } from "@/config/database.js";
import healthRoutes from "@/routes/health.routes.js";
import authRoutes from "@/routes/auth.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
import profileRoutes from "@/routes/profile.routes.js";
import taskRoutes from "@/routes/task.routes.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
