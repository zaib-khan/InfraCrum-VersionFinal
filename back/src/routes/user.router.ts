import { Router } from 'express';
import { authorize } from '../controllers/auth.controller.js';
import { dataUserUpdate, dataUser, registerUser, getAllUsers } from '../controllers/user.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';

const apiUserRouter:Router = Router();
apiUserRouter.post('/users', validate, catchErrors(registerUser));
apiUserRouter.get('/users', authorize, validate, catchErrors(dataUser));
apiUserRouter.patch('/updateUsers', authorize, validate, catchErrors(dataUserUpdate));
apiUserRouter.get('/getAllUsers', authorize, validate, catchErrors(getAllUsers));
export { apiUserRouter };
