/* eslint-disable no-console */
import type { Repository } from 'typeorm';
import { DataSource } from 'typeorm';
import { Project } from './models/project.js';
import { Tasks } from './models/tasks.js';
import { User } from './models/user.js';

let dbIsRunning = false;
export let datasource : DataSource;
let userRepository : Repository<User>;
let projectRepository : Repository<Project>;
let tasksRepository : Repository<Tasks>;

const initDatabase = async () => {
  const connection = new DataSource({
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: 3306,
    host: process.env.MYSQL_HOST,
    type: 'mysql',
    // on importe les fichiers modèles dans la connexion de données
    entities: ['src/models/*.ts'],
    synchronize: true,
  });
  // on intitialize la connexion
  try {
    datasource = await connection.initialize();
    userRepository = connection.getRepository(User);
    projectRepository = connection.getRepository(Project);
    tasksRepository = connection.getRepository(Tasks);

    dbIsRunning = true;
    console.log('Connecté à la base de données');
  } catch (e) {
    console.error('Echec de connexion ', e);
  }
};

export { initDatabase, dbIsRunning, userRepository, projectRepository, tasksRepository };
