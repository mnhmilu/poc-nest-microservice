import { Controller, Get } from '@nestjs/common';
import { BdcarsApiGatewayService } from './bdcars-api-gateway.service';

@Controller()
export class BdcarsApiGatewayController {
  constructor(private readonly bdcarsApiGatewayService: BdcarsApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.bdcarsApiGatewayService.getHello();
  }
}
