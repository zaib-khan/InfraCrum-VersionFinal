import { config } from 'dotenv';
import { dbIsRunning, initDatabase } from './application.database.js';
import { createApp } from './application.js';
import { seedDatabase } from './seeds/database.seeder.js';

config({ path: 'variables.env' });

export const initAPP = async () => {
  await initDatabase();
  const app = await createApp();
  await seedDatabase();
  if (dbIsRunning) {
    app.listen(process.env.PORT, () => {
      console.log(`app listening on port ${process.env.PORT}`);
    });
  } else {
    console.log('There was an error in the database connection');
  }
};
initAPP();
