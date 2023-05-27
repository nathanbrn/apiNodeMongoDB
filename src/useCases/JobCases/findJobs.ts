import { Request, Response } from "express";
import { Job } from "../../models/Job";

export async function findJobs(req: Request, res: Response) {
 try {
  const jobs = await Job.find();

  res.status(200).json(jobs);
 } catch (err) {
  res.status(500).send('Erro ao listar jobs');
  console.log(err);
 }
}
