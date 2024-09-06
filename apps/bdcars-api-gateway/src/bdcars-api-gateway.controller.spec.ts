import { Test, TestingModule } from '@nestjs/testing';
import { BdcarsApiGatewayController } from './bdcars-api-gateway.controller';
import { BdcarsApiGatewayService } from './bdcars-api-gateway.service';

describe('BdcarsApiGatewayController', () => {
  let bdcarsApiGatewayController: BdcarsApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BdcarsApiGatewayController],
      providers: [BdcarsApiGatewayService],
    }).compile();

    bdcarsApiGatewayController = app.get<BdcarsApiGatewayController>(BdcarsApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bdcarsApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
