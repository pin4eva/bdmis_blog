import * as dotenv from 'dotenv';

dotenv.config();
export const config = {
  postgres: {
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE_NAME,
    host: process.env.POSTGRES_HOST,
  },
};
