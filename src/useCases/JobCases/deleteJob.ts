import { Request, Response } from "express";
import { Job } from "../../models/Job";

export async function deleteJob(req: Request, res: Response) {
  const { id } = req.params;

  if (!id) {
    return res.status(404).send('User not found!');
  }

  await Job.deleteOne({ _id: id });

  res.status(204).json({});
}
