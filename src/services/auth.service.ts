import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt, { SignOptions } from "jsonwebtoken";

import { User } from "@/models/user.model.js";
import { AppError } from "@/utils/appError.js";
import { sendVerificationEmail } from "@/services/email.service.js";

export const signup = async (name: string, email: string, password: string) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new AppError("Email already registered", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const verificationCode = crypto.randomInt(100000, 1000000).toString();

  const hashedVerificationCode = await bcrypt.hash(verificationCode, 10);

  const verificationExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

  await User.create({
    name,
    email,
    password: hashedPassword,
    emailVerified: false,
    emailVerificationCode: hashedVerificationCode,
    emailVerificationExpiresAt: verificationExpiresAt,
  });

  await sendVerificationEmail(email, verificationCode);
};

export const verifyEmail = async (email: string, code: string) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError("Invalid verification request", 400);
  }

  if (user.emailVerified) {
    throw new AppError("Email is already verified", 400);
  }

  if (
    !user.emailVerificationExpiresAt ||
    user.emailVerificationExpiresAt < new Date()
  ) {
    throw new AppError("Verification code expired", 400);
  }

  if (!user.emailVerificationCode) {
    throw new AppError("No verification code found", 400);
  }

  const validCode = await bcrypt.compare(code, user.emailVerificationCode);

  if (!validCode) {
    throw new AppError("Invalid verification code", 400);
  }

  user.emailVerified = true;
  user.emailVerificationCode = null;
  user.emailVerificationExpiresAt = null;

  await user.save();
};

export const signin = async (email: string, password: string) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  if (!user.emailVerified) {
    throw new AppError("Please verify your email first", 403);
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid email or password", 401);
  }

  const options: SignOptions = {
    expiresIn: process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"],
  };

  const token = jwt.sign(
    {
      userId: user._id.toString(),
      role: user.role,
    },
    process.env.JWT_SECRET!,
    options,
  );

  return token;
};
