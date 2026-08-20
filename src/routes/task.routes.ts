import express from "express";
import { authenticate } from "@/middleware/auth.middleware.js";
import {
  validateRequest,
  validateCreateTask,
  validateUpdateTask,
} from "@/middleware/validation.middleware.js";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "@/controllers/task.controller.js";

const router = express.Router();

router
  .route("/")
  .post(authenticate, validateCreateTask, validateRequest, createTask)
  .get(authenticate, getTasks);

router
  .route("/:id")
  .get(authenticate, getTaskById)
  .patch(authenticate, validateUpdateTask, validateRequest, updateTask)
  .delete(authenticate, deleteTask);

export default router;
