import { NestFactory } from '@nestjs/core';

import{MicroserviceOptions,Transport} from '@nestjs/microservices';
import { NewsModule } from './news/news.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(NewsModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3002 },
  });
  await app.listen();
}

bootstrap();
