import { Router } from 'express';
import { findJobs } from '../useCases/JobCases/findJobs';
import { createJob } from '../useCases/JobCases/createJob';
import { updateJob } from '../useCases/JobCases/updateJob';
import { deleteJob } from '../useCases/JobCases/deleteJob';
import { findJob } from '../useCases/JobCases/findJob';
import { findJobStars } from '../useCases/JobCases/findJobStars';

export const jobRouter = Router();

jobRouter.get('/jobs', findJobs);

jobRouter.get('/jobs/:id', findJob);

jobRouter.post('/jobs', createJob);

jobRouter.put('/jobs/:id', updateJob);

jobRouter.delete('/jobs/:id', deleteJob);

jobRouter.get('/starjobs', findJobStars);
