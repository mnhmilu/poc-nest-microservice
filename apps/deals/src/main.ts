import { NestFactory } from '@nestjs/core';

import{MicroserviceOptions,Transport} from '@nestjs/microservices';

import { DealsModule } from './deals.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(DealsModule, {
    transport: Transport.TCP,
    options: { port: 3001 },
  });
  await app.listen();
}

bootstrap();
