import { DataSource } from 'typeorm';
import { Books } from './src/models/book.entity';
import * as dotenv from 'dotenv';

dotenv.config({
  path: `${__dirname}/.env`,
});

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'mypassword',
  database: process.env.POSTGRES_DATABASE || 'rgt',
  entities: [Books],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
  logging: true,
});
