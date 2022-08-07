import type { NextFunction, Request, Response } from 'express';

interface HttpError extends Error{
  status:number,
}
const err: HttpError = new Error() as HttpError;

const catchErrors = (fn:any) => {
  return function (req:Request, res:Response, next : NextFunction) {
    return fn(req, res, next).catch(next);
  };
};

const notFound = (req:Request, res:Response, next:NextFunction) => {
  err.message = 'not found';
  err.status = 404;
  next(err);
};
const appError = (err:any, req:Request, res:Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
};
export { catchErrors, HttpError, notFound, appError };
