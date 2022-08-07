
import type { NextFunction, Request, Response } from 'express';
import { userRepository } from '../application.database.js';
import pkg from 'jsonwebtoken';
import type { HttpError } from '../middlewares/error.middleware.js';
const { sign, verify } = pkg;

const login = async (req:Request, res:Response, next:NextFunction) => {
  const user = await userRepository!.findOne({
    where: {
      email: req.body.email,
    },
    select: ['id', 'password'],
  });
  if (user && await user!.verifyPassword(req.body.password)) {
    const jwtToken = await sign(
      {
        data: user.id,
      },
      process.env.JWT_SECRET || 'infrascrum',
    );
    return res.json(jwtToken);
  }
  const err = new Error() as HttpError;
  err.message = 'tu possédes pas un compte, subscribe plz';
  err.status = 401;
  next(err);
};

const authorize = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const jwtToken = req.headers.authorization?.split(' ')[1] || 'notoken';
    await verify(jwtToken, process.env.JWT_SECRET || 'nojwtoken');
    next();
  } catch (error) {
    const err = new Error() as HttpError;
    err.message = 'Bad token';
    err.status = 401;
    next(err);
  }
};

export { login, authorize };
