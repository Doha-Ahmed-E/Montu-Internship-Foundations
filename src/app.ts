import "dotenv/config";
import express from "express";
import healthRoutes from "@/routes/health.routes.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/", healthRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
