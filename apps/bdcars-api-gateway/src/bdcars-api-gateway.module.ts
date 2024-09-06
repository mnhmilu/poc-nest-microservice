import { Module } from '@nestjs/common';
import { BdcarsApiGatewayController } from './bdcars-api-gateway.controller';
import { BdcarsApiGatewayService } from './bdcars-api-gateway.service';
import { DealsModule } from './deals/deals.module';
import { NewsModule } from './news/news.module';


@Module({
  imports: [DealsModule, NewsModule],
  controllers: [BdcarsApiGatewayController],
  providers: [BdcarsApiGatewayService],
})
export class BdcarsApiGatewayModule {}
