import { Request, Response } from "express";
import { Job } from "../../models/Job";

export async function findJobs(req: Request, res: Response) {
 try {
  const jobs = await Job.find();

  if (jobs.length === 0) {
   return res.status(404).json({ message: 'Nenhuma vaga encontrada' });
  }

  res.status(200).json(jobs);
 } catch (err) {
  console.log(err);
  res.status(500).send('Erro ao listar jobs');
 }
}
