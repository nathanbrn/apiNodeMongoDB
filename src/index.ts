import express from 'express';
import mongoose from 'mongoose';
import { jobRouter } from './routes/jobs.router';

const app = express();

const dbConnection = 'mongodb+srv://brenonathanael:qTi30CPThx80tvOX@database.bk9ntg8.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

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
