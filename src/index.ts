import express from 'express';
import mongoose from 'mongoose';
import { jobRouter } from './routes/jobs.router';

const app = express();

const dbConnection = 'mongodb://admin:admin@localhost:27017';
const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;

mongoose.connect(dbConnection).then(() => {

	console.log('💾 Conectado ao banco de dados...');

	app.use(express.json());
	app.use(jobRouter);

	app.listen(PORT, () => {
		console.log(`🚀 Server is running on port ${PORT}`);
	});
}).catch(() => {
	console.log('Erro ao conectar ao banco de dados');
});
