import { Request, Response } from "express";
import { Job } from "../../models/Job";

export async function updateJob(req: Request, res: Response) {
  const { id } = req.params;
  const { title, hour, salary, exp, link } = req.body;

  if (!title || !link) {
    return res.status(400).send('Dados obrigatórios não foram preenchidos');
  }

  await Job.updateOne({ _id: id }, {
    title,
    hour,
    salary,
    exp,
  });

  res.status(200).send('Vaga atualizada com sucesso');
}
