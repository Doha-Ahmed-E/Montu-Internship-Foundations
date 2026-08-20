import express from "express";
import { getProfile, updateProfile } from "@/controllers/profile.controller.js";
import { authenticate } from "@/middleware/auth.middleware.js";
import {
  validateRequest,
  validateUpdateProfile,
} from "@/middleware/validation.middleware.js";

const router = express.Router();

router
  .route("/")
  .get(authenticate, getProfile)
  .patch(authenticate, validateUpdateProfile, validateRequest, updateProfile);

export default router;
