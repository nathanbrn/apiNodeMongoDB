import { Request, Response } from "express";
import { User } from "../../models/User";

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({ message: "User not found" });
  }

  await User.deleteOne({ _id: id });

  res.status(204).json({});
}
