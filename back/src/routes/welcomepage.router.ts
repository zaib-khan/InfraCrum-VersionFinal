import { Router } from 'express';
import { authorize } from '../controllers/auth.controller.js';
import { welcome } from '../controllers/welcomepage.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';

const apiWelcomeRouter:Router = Router();
apiWelcomeRouter.get('/welcomepage', authorize, catchErrors(welcome));

export { apiWelcomeRouter };
