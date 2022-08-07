import type { NextFunction, Request, Response } from 'express';
import type { JwtPayload } from 'jsonwebtoken';
import { decode } from 'jsonwebtoken';
import { projectRepository, userRepository } from '../application.database.js';
import type { HttpError } from '../middlewares/error.middleware.js';

const createproject = async (req:Request, res:Response) => {
  console.log('createproject');
  const token = req.headers.authorization!.split(' ')[1];
 
  const userId = ((await decode(token) as JwtPayload).data);
  const user = await userRepository.findOneBy({ id: userId });
  if (req.body.users) {
    const usersparticipated:string[] = req.body.users;
    return req.body.users = await Promise.all(usersparticipated.map(async (userparticipated: string) => {
      userRepository.findOneBy({ id: parseInt(userparticipated) });
    }));
  }
  req.body.useradmin = user;
  try {
    const project = projectRepository.create(req.body);
    await projectRepository.save(project);
    res.status(201).json({ project });
  } catch (error) {
    console.log(error);
  }
};

const SoftdeleteProjects = async (req: Request, res:Response, next:NextFunction) => {
  console.log(SoftdeleteProjects);
  const { id } = req.params;
  const token = req.headers.authorization!.split(' ')[1];
  const userId = await ((decode(token) as JwtPayload).data);
  const QueryBuilderforuseradmin = await projectRepository
    .createQueryBuilder('project')
    .select()
    .leftJoinAndSelect('project.useradmin', 'useradmin')
    // /esaaye d'effacer les tasks en mm temps
    .where('project.id = :project_id', { project_id: parseInt(id) })
    .getOne();
  try {
    if (QueryBuilderforuseradmin && QueryBuilderforuseradmin.useradmin.id === userId) {
      const softDelate = await projectRepository.softDelete(QueryBuilderforuseradmin.id);
      res.status(201).json({ softDelate });
    }else { 
      const err = new Error() as HttpError;
      err.message = 'your are not alowed to delete this project, you are not the admin ';
      err.status = 401;
      next(err);}
  } catch (error) {
    console.log(error);
   
  }
};

const UpdateProjects = async (req: Request, res:Response, next:NextFunction) => {
  console.log(UpdateProjects);
  const { id } = req.params;
  console.log(id);
  const token = req.headers.authorization!.split(' ')[1];
  const userId = await ((decode(token) as JwtPayload).data);
  console.log(userId);
  const QueryBuilderforUpdate = await projectRepository
    .createQueryBuilder('project')
    .leftJoinAndSelect('project.users', 'users')
    .leftJoinAndSelect('project.useradmin', 'useradmin')
    .where('project.id = :project_id', { project_id: parseInt(id) })
    .getOne();

  if (QueryBuilderforUpdate && QueryBuilderforUpdate.useradmin.id === userId) {
    // const Update = await projectRepository.merge(QueryBuilderforUpdate, req.body);
    const Update = await projectRepository.merge(QueryBuilderforUpdate, req.body);
    await projectRepository.save(Update);
    return res.status(201).json({ Update });
  } else {
    const err = new Error() as HttpError;
    err.message = 'your are not alowed to update this project';
    err.status = 401;
    next(err);
  }
};

const findAllprojectuser = async (req:Request, res:Response, next: NextFunction) => {
  console.log(findAllprojectuser);
  const token = req.headers.authorization!.split(' ')[1];
  const userId = ((await decode(token) as JwtPayload).data);
  try {
    const findprojectusers = await projectRepository
      .createQueryBuilder('project')
      .leftJoinAndSelect('project.users', 'users')
      .leftJoinAndSelect('project.useradmin', 'useradmin')
      .where('users.id  = :user_id', { user_id: userId })
      .orWhere('useradmin.id = :user_id ', { user_id: userId })
      .getMany()
    ;

    return res.status(200).json({ findprojectusers });
  } catch (error) {
    console.log(error);
    const err = new Error() as HttpError;
    err.message = 'you don\'t have a project';
    err.status = 401;
    next(err);
  }
  ;
};

const findAllprojects = async (req:Request, res:Response) => {
  const findproject = await projectRepository
    .createQueryBuilder('project')
    .leftJoinAndSelect('project.users', 'users')
    .leftJoinAndSelect('project.useradmin', 'useradmin')
    .leftJoinAndSelect('project.tasks', 'tasks')
    .getMany()
    ;
 
    return res.status(200).json(findproject);
};

export { createproject, SoftdeleteProjects, UpdateProjects, findAllprojectuser, findAllprojects };
