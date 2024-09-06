import { Injectable } from '@nestjs/common';

@Injectable()
export class BdcarsApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
