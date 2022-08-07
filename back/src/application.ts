import cors from 'cors';
import express, { json } from 'express';
import { appError, notFound } from './middlewares/error.middleware.js';
import { apiAuthRouter } from './routes/auth.router.js';
import { apiProjectRouter } from './routes/project.router.js';
import { apiTasksRouter } from './routes/tasks.router.js';
import { apiUserRouter } from './routes/user.router.js';
import { apiWelcomeRouter } from './routes/welcomepage.router.js';

const createApp = ():express.Application => {
  const app = express();
  app.use(cors());
  app.use(json());
  app.use(apiUserRouter);
  app.use(apiAuthRouter);
  app.use(apiWelcomeRouter);
  app.use(apiProjectRouter);
  app.use(apiTasksRouter);
  app.use(notFound);
  app.use(appError);
  return app;
};
export { createApp };
