import { Request, Response, NextFunction } from "express";
import * as authService from "@/services/auth.service.js";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, password } = req.body;

    await authService.signup(name, email, password);

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    const token = await authService.signin(email, password);

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, code } = req.body;

    await authService.verifyEmail(email, code);

    res.status(200).json({
      message: "Email verified successfully",
    });
  } catch (error) {
    next(error);
  }
};
