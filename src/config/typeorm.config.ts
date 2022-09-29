import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { config } from './config.utils';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: config.postgres.host,
  database: config.postgres.database,
  username: config.postgres.username,
  password: config.postgres.password,
  port: config.postgres.port,
  logging: true,
  synchronize: false,
  entities: ['dist/**/*.entity.{js,ts}'],
  migrations: ['dist/migrations/**/*.js'],
  migrationsRun: true,
};

const dataSource = new DataSource({ ...typeORMConfig, type: 'postgres' });
export default dataSource;
