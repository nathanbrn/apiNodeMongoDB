import { Request, Response } from 'express';
import { Job } from '../../models/Job';

export async function findJob(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const job = await Job.findById(id);

        if (!job) {
            return res.status(404).json({ message: 'Job não encontrado' });
        }

        res.json(job);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao buscar Job' });
    }
}
