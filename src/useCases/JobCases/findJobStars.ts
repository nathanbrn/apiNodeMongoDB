import { Request, Response } from 'express';
import { Job } from '../../models/Job';

export async function findJobStars(req: Request, res: Response) {
  try {
    const jobs = await Job.find({ star: true });

    if (jobs.length === 0) {
      return res.status(404).json({ message: 'Vagas não encontradas' });
    }

    res.json(jobs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
