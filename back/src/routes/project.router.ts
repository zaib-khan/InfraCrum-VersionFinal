import { Router } from 'express';
import { authorize } from '../controllers/auth.controller.js';
import { createproject, findAllprojects, findAllprojectuser, SoftdeleteProjects, UpdateProjects } from '../controllers/project.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';
import { getProjectValidationRules } from '../validators/projects.validator.js';
const apiProjectRouter:Router = Router();

apiProjectRouter.post('/project', validate, authorize, getProjectValidationRules(), catchErrors(createproject));
apiProjectRouter.get('/project', authorize, validate, findAllprojects);
apiProjectRouter.patch('/project/:id', authorize, validate, UpdateProjects);
apiProjectRouter.delete('/project/:id', authorize, validate, SoftdeleteProjects);
apiProjectRouter.get('/profileUser', authorize, validate, findAllprojectuser);

export { apiProjectRouter };
