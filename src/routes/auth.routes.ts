import express from "express";
import { signup, signin, verifyEmail } from "@/controllers/auth.controller.js";
import {
  validateRequest,
  validateSignup,
  validateSignin,
  validateVerifyEmail,
} from "@/middleware/validation.middleware.js";

const router = express.Router();

router.route("/signup").post(validateSignup, validateRequest, signup);
router
  .route("/verify-email")
  .post(validateVerifyEmail, validateRequest, verifyEmail);
router.route("/signin").post(validateSignin, validateRequest, signin);

export default router;
