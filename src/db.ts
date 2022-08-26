import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { AppDataSource } from './data-source';

const dataSource = AppDataSource;

export default async function connectToDatabase(): Promise<DataSource> {
  /**
   * Fix for working with the connections in testing and also
   * just a way to validate we're not recreating connections on prod.
   *
   * Checks if the connection already exists (TypeORM errors if it doesn't)
   * If it doesn't exist, catches the error, and creates the connection.
   */

  if (dataSource.isInitialized) {
    return dataSource;
  }
  await dataSource.initialize();

  return dataSource;
}

export function getDatasource(): DataSource {
  return dataSource;
}
