/* eslint-disable no-console */
import type { NextFunction, Request, Response } from 'express';
import type { JwtPayload } from 'jsonwebtoken';
import { decode } from 'jsonwebtoken';
import { userRepository } from '../application.database.js';
import type { HttpError } from '../middlewares/error.middleware.js';

const registerUser = async (req:Request, res:Response, next: NextFunction) => {

  const dataUser = await userRepository.findOneBy({
    email: req.body.email,
  });
  if (!dataUser) {
    const dataUser = userRepository.create(req.body);
    await userRepository.save(dataUser);
    res.json({ dataUser });
  }
  const err = new Error() as HttpError;
  err.message = 'tu  possédes déjà un compte, connectez vs plz';
  err.status = 401;
  next(err);
};
const dataUser = async (req:Request, res:Response) => {
  const token = req.headers.authorization!.split(' ')[1];
  console.log(token);
  const userId = ((await decode(token) as JwtPayload).data);
  console.log(userId);
  const data = await userRepository
    .createQueryBuilder('user')
    .select()
    .leftJoinAndSelect('user.projects', 'projects')
    .leftJoinAndSelect('user.projectadmin', 'projectadmin')
    .leftJoinAndSelect('user.tasks', 'tasks')
    .where('user.id = :user_id', { user_id: userId })
    .getMany();

  return res.status(200).json({  data });
};

const dataUserUpdate = async (req:Request, res:Response) => {
  const token = req.headers.authorization!.split(' ')[1];
  console.log(token);
  const userId = ((await decode(token) as JwtPayload).data);
  console.log(userId);
  const dataUser = await userRepository.findOneBy({
    id: userId,
  });
  if (dataUser) {
    const mergedObject = await userRepository.merge(dataUser, req.body);
    await userRepository.save(mergedObject);
    return res.status(200).json({ mergedObject });
  }
};

const getAllUsers = async (req:Request, res:Response) => {
  const token = req.headers.authorization!.split(' ')[1];
  // console.log(token);
  const userId = ((await decode(token) as JwtPayload).data);
  // console.log(userId);
  const data = await userRepository
    .createQueryBuilder('user')
    .select()
    .leftJoinAndSelect('user.projects', 'projects')
    .leftJoinAndSelect('user.projectadmin', 'projectadmin')
    .leftJoinAndSelect('user.tasks', 'tasks')
    .getMany();
  return res.status(200).json({ data });
};
export { registerUser, dataUser, dataUserUpdate, getAllUsers };
