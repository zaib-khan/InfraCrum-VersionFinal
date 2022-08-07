import { readFileSync } from 'fs';
import type { DataSource } from 'typeorm';
import { EnterpriseModel } from './models/enterprise.js';

export async function convertJSONDB (databasesource: DataSource) {
  const { enterprises } = JSON.parse(readFileSync('src/db.json', 'utf-8'));

  for (const enterprise of enterprises) {
    const enterpriseModel = databasesource.getRepository(EnterpriseModel).create({
      img: enterprise.img,
      name: enterprise.nom,
    });
    await databasesource.getRepository(EnterpriseModel).save(enterpriseModel);
  }
}
