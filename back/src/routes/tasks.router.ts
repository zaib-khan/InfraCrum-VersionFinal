import { Router } from 'express';
import { authorize } from '../controllers/auth.controller.js';
import { createTasks, findAllTasks, sofdeleteTasks, UpdateTasks } from '../controllers/task.controller.js';
import { validate } from '../validators/base.validator.js';
import { getTaskValidationRules } from '../validators/tasks.validator.js';

const apiTasksRouter:Router = Router();

apiTasksRouter.post('/:id/:createTasks', authorize, createTasks);
apiTasksRouter.get('/:id/:tasks', authorize, findAllTasks);
apiTasksRouter.patch('/:id/:idTasks',  UpdateTasks);
apiTasksRouter.delete('/:id/:idTasks', authorize, sofdeleteTasks);

export { apiTasksRouter };
