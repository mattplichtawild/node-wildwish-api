import { DataSource } from "typeorm";
// import * as env from 'env-var';

const { default: connectToDatabase } = require('../src/db')

let dataSource: DataSource

beforeAll(async () => {
    // if (env.get('NODE_ENV').required().asString() !== 'test') {
    //   throw new Error('Cannot run tests outside of test environment');
    // }
    dataSource = await connectToDatabase()
    await dataSource.synchronize() // Putting sync here because Typescript compilation can't happen in the global setup

  })
  
  afterEach(async () => {
    const dataSource: DataSource = await connectToDatabase()
  
    const manager = dataSource.manager
    const entities = dataSource.entityMetadatas
    
    for (const entity of entities) {
      await manager.query(`ALTER TABLE ${entity.tableName} DISABLE TRIGGER ALL`)
      await manager.query(`DELETE FROM ${entity.tableName} `)
      await manager.query(`ALTER TABLE ${entity.tableName} ENABLE TRIGGER ALL`)
    }
  });
  
  afterAll(async () => {
    await dataSource.destroy()
  })