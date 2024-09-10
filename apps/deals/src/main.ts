import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DealsModule } from './deals.module';


async function bootstrap() {


  const app = await NestFactory.createMicroservice<MicroserviceOptions>(DealsModule, {
    transport: Transport.TCP,
    options: { 
      host: '0.0.0.0',
      port: 3001,
    },
  });

  // Log when the microservice starts
  await app.listen();

}

bootstrap();
