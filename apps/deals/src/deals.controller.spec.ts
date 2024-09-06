import { Test, TestingModule } from '@nestjs/testing';
import { DealsController } from './deals.controller';
import { DealsService } from './deals.service';

describe('DealsController', () => {
  let dealsController: DealsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DealsController],
      providers: [DealsService],
    }).compile();

    dealsController = app.get<DealsController>(DealsController);
  });

  describe('root', () => {
   
  });
});
