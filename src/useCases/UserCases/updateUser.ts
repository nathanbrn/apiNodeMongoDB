import { Request, Response } from 'express';
import { User } from '../../models/User';

export async function updateUser(req: Request, res: Response) {
	const { id } = req.params;
	const { name, email, age } = req.body;

	const user = User.findById(id);

	if (!user) {
		return res.status(404).json({ message: 'User not found' });
	}

  await User.updateOne({ _id: id }, { name, email, age });

  res.status(200).json({ message: 'User updated' });
}
