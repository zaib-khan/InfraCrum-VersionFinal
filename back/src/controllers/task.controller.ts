import type { NextFunction, Request, Response } from 'express';
import { projectRepository, tasksRepository, userRepository } from '../application.database.js';
import type { HttpError } from '../middlewares/error.middleware.js';

const createTasks = async (req: Request, res: Response) => {
  console.log('hjsd');
  const projectId = req.params.id;
  // console.log(projectId)
  const project = await projectRepository.findOneBy({ id: parseInt(projectId) });
  // const usersparticipated:string[] = req.body.users;
  // const usersproject = await Promise.all(usersparticipated.map(async (userparticipated: string) => {
  //   return userRepository.findOneBy({ id: parseInt(userparticipated) });
  // }));
  req.body.project = project;
  if (req.body.users) {
    const usersparticipated:string[] = req.body.users;
    const users = await Promise.all(usersparticipated.map(async (userparticipated: string) => {
       return userRepository.findOneBy({ id: parseInt(userparticipated) });
       
    })); 
   req.body.users = users;
  //  console.log(users)
  }


  // req.body.users = usersproject;
  try {
    const task = tasksRepository.create(req.body);
    await tasksRepository.save(task);
    return res.status(201).json({ task });
  } catch (error) {
    // console.log(error);
  }
};

const sofdeleteTasks = async (req: Request, res: Response) => {
  const softDelate = await tasksRepository.softDelete({ id: parseInt(req.params.idTasks) });
  return res.status(201).json({ message: 'your task is deleted' });
};

const UpdateTasks = async (req: Request, res:Response) => {
  // const taskId = await tasksRepository.findOneBy({ id: req.body.taskId });
  const projectId = req.params.id;
  console.log(projectId)
  const usersparticipated:string[] = req.body.users;
  console.log(usersparticipated)
  const userstasks = await Promise.all(usersparticipated.map(async (userparticipated: string) => {
    return userRepository.findOneBy({ id: parseInt(userparticipated) });
  }));
  req.body.users = userstasks;
  console.log(userstasks)
  const queryBuilderforUpdate = await tasksRepository
    .createQueryBuilder('tasks')
    .leftJoinAndSelect('tasks.users', 'users')
    .leftJoinAndSelect('tasks.project', 'project')
    .where('tasks.id  = :tasks_id', { tasks_id: parseInt(req.params.idTasks)  })
    .andWhere('project.id = :project_id ', { project_id: parseInt(projectId) })
    .getOne();
console.log(queryBuilderforUpdate)
  if (!queryBuilderforUpdate) {
    throw new Error('Task not found');
  } else {
    queryBuilderforUpdate.users = [];
    const mergedObject = await tasksRepository.merge(queryBuilderforUpdate, req.body);
    await tasksRepository.save(mergedObject);

    res.status(201).json({ mergedObject });
  }
};

const findAllTasks = async (req: Request, res:Response, next: NextFunction) => {
  const projectId = req.params.id;
  // const findproject = await projectRepository.findOneBy({ id: parseInt(projectId) });
  try {
    const findTaskbyProject = await tasksRepository
      .createQueryBuilder('tasks')
      .leftJoinAndSelect('tasks.users', 'users')
      .leftJoinAndSelect('tasks.project', 'project')
      .where('project.id  = :project_id', { project_id: parseInt(projectId) })
      .getMany()
  ;
  if (findTaskbyProject) {
    return res.status(200).json({ findTaskbyProject });
  } else {
    const err = new Error() as HttpError;
    err.message = 'tasks dosent exist';
    err.status = 404;
    next(err);
  }
} 
    // return res.status(200).json({ findTaskbyProject });
   catch (error) {
    console.log(error);
    // const err = new Error() as HttpError;
    // err.message = 'project dosent exist';
    // err.status = 401;
    // next(err);
  }
};

export { createTasks, sofdeleteTasks, UpdateTasks, findAllTasks };
