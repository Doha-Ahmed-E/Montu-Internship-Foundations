import { Request, Response, NextFunction } from "express";

import * as profileService from "@/services/profile.service.js";

export const getProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user!.userId;

    const user = await profileService.getProfile(userId);

    res.status(200).json({
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user!.userId;
    const { name } = req.body;

    const user = await profileService.updateProfile(userId, name);

    res.status(200).json({
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};
