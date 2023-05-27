import { User } from "../../models/User";
import { Request, Response } from 'express';

export async function createUser(req: Request, res: Response) {
	try {
		const { name, email, age } = req.body;

		const user = await User.create({
			name,
			email,
			age: Number(age),
		});

		res.status(201).json(user);
	} catch (err) {
		console.log('Erro ao criar usuário', err);
		res.sendStatus(500);
	}
}
