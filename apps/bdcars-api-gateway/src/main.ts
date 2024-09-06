import { NestFactory } from '@nestjs/core';
import { BdcarsApiGatewayModule } from './bdcars-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(BdcarsApiGatewayModule);
  await app.listen(3000);
}
bootstrap();
