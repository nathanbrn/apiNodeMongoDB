import { Router } from 'express';
import { findUsers } from '../useCases/UserCases/findUsers';
import { createUser } from '../useCases/UserCases/createUser';
import { updateUser } from '../useCases/UserCases/updateUser';
import { deleteUser } from '../useCases/UserCases/deleteUser';

export const userRouter = Router();

userRouter.get('/users', findUsers);

userRouter.post('/users', createUser);

userRouter.put('/users/:id', updateUser);

userRouter.delete('/users/:id', deleteUser);
