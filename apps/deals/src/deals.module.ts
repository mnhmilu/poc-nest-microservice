import { Module } from '@nestjs/common';
import { DealsController } from './deals.controller';
import { DealsService } from './deals.service';

@Module({
  imports: [],
  controllers: [DealsController],
  providers: [DealsService],
})
export class DealsModule {}
