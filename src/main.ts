import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = Number(process.env.PORT);
  await app.listen(PORT, () => {
    console.log('Server started on ', PORT);
  });
}
bootstrap();
