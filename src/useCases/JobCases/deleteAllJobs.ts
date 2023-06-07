import { Request, Response } from 'express';
import { Job } from '../../models/Job';

export async function deleteAllJobs(req: Request, res: Response) {
  const jobs = await Job.find();

  if (jobs.length === 0) {
    return res.status(404).json({ message: 'No jobs found' });
  }

  await Job.deleteMany();

  return res.status(204).json();
}
