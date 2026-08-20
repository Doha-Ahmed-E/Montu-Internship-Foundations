import { User } from "@/models/user.model.js";
import { AppError } from "@/utils/appError.js";

export const getProfile = async (userId: string) => {
  const user = await User.findById(userId).select(
    "-password -emailVerificationCode -emailVerificationExpiresAt",
  );

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

export const updateProfile = async (userId: string, name: string) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { name },
    {
      new: true,
      runValidators: true,
    },
  ).select("-password -emailVerificationCode -emailVerificationExpiresAt");

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};
