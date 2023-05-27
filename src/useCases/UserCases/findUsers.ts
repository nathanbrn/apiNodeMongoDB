import { Request, Response } from "express";
import { User } from "../../models/User";

export async function findUsers(req: Request, res: Response) {
	try {
		const users = await User.find();

		res.json(users);
	} catch (err) {
		console.log('Erro ao buscar usuários', err);
		res.sendStatus(500);
	}
}
