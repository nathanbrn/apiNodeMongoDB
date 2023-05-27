import { Request, Response } from 'express';
import { Job } from '../../models/Job';

export async function createJob(req: Request, res: Response) {
	try {
		const { title, hour, salary, exp, link } = req.body;

		if (!title || !link) {
			return res.status(400).send('Dados obrigatórios não foram preenchidos');
		}

		const job = await Job.create({
			title,
			hour,
			salary,
			exp,
			link
		});

		res.status(201).json(job);
	} catch (err) {
		return res.status(400).send('Erro ao criar vaga');
		console.log(err);
	}
}
