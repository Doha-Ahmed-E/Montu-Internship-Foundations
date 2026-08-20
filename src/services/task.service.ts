import { Task } from "@/models/task.model.js";
import { AppError } from "@/utils/appError.js";

export const createTask = async (
  userId: string,
  title: string,
  description?: string,
) => {
  const task = await Task.create({
    title,
    description,
    userId,
  });

  return task;
};

export const getTasks = async (userId: string) => {
  return Task.find({ userId }).sort({ createdAt: -1 });
};

export const getTaskById = async (userId: string, taskId: string) => {
  const task = await Task.findOne({
    _id: taskId,
    userId,
  });

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  return task;
};

export const updateTask = async (
  userId: string,
  taskId: string,
  updates: {
    title?: string;
    description?: string;
    completed?: boolean;
  },
) => {
  const task = await Task.findOneAndUpdate(
    {
      _id: taskId,
      userId,
    },
    updates,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  return task;
};

export const deleteTask = async (userId: string, taskId: string) => {
  const task = await Task.findOneAndDelete({
    _id: taskId,
    userId,
  });

  if (!task) {
    throw new AppError("Task not found", 404);
  }
};
