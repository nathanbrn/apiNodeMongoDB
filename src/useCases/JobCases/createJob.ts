import { Request, Response } from 'express';
import { Job } from '../../models/Job';

export async function createJob(req: Request, res: Response) {
	try {
		const {
      title,
      experience,
      enterprice,
      type,
      hour,
      salary,
      location,
      description,
      requirements,
      differentials,
      benefits,
      url,
     } = req.body;

     let star = false;

		if (!title || !experience || !enterprice || !location || !requirements || !url) {
			return res.status(400).send('Dados obrigatórios não foram preenchidos');
		}

    if (title && experience && enterprice && type && hour && salary && location && description && requirements && differentials && benefits && url) {
      star = true;
    }

		const job = await Job.create({
			title,
      experience,
      enterprice,
      type,
      hour,
      salary,
      location,
      description,
      requirements,
      differentials,
      benefits,
      url,
      star
		});

		res.status(201).json(job);
	} catch (err) {
		console.log(err);
		return res.status(400).send('Erro ao criar vaga');
	}
}
