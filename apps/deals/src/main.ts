import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DealsModule } from './deals.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('DealsMicroservice');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(DealsModule, {
    transport: Transport.TCP,
    options: { 
      host: '0.0.0.0',
      port: 3001,
    },
  });

  // Log when the microservice starts
  await app.listen();
  logger.log('Microservice is listening on port 3001');

  // Use application lifecycle hooks to detect shutdown
  app.enableShutdownHooks();

  process.on('SIGINT', async () => {
    logger.log('Microservice is shutting down...');
    await app.close();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    logger.log('Microservice is shutting down...');
    await app.close();
    process.exit(0);
  });
}

bootstrap();
