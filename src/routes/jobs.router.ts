import { Router } from "express";
import { findJobs } from "../useCases/JobCases/findJobs";
import { createJob } from "../useCases/JobCases/createJob";
import { updateJob } from "../useCases/JobCases/updateJob";
import { deleteJob } from "../useCases/JobCases/deleteJob";

export const jobRouter = Router();

jobRouter.get('/jobs', findJobs);

jobRouter.post('/jobs', createJob);

jobRouter.put('/jobs/:id', updateJob);

jobRouter.delete('/jobs/:id', deleteJob);
