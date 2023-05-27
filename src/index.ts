import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.router';
import { jobRouter } from './routes/jobs.router';

const app = express();

const dbConnection = process.env.DATABASE_URL || 'mongodb://admin:admin@localhost:27017';

mongoose.connect(dbConnection).then(() => {

	console.log('💾 Conectado ao banco de dados...');

	const PORT = process.env.PORT || 3000;

	app.use(express.json());
	app.use([
		userRouter,
		jobRouter
	]);
	app.use(express.urlencoded({ extended: true }));

	app.listen(PORT, () => {
		console.log(`🚀 Server is running on port ${PORT}`);
	});
}).catch(() => {
	console.log('Erro ao conectar ao banco de dados');
});
