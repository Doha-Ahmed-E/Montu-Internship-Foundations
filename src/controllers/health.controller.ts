import { Request, Response, NextFunction } from "express";

export const ping = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "pong" });
};
