// gateway/src/app.module.ts
import { Module } from '@nestjs/common';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { ClientConfigModule } from '../client-config/client-config.module';
import { DEALS_CLIENT } from './constant';
import { ClientConfigService } from '../client-config/client-config.service';


@Module({
  imports: [ClientConfigModule],
  controllers:[DealsController],
  providers: [
    DealsService,
  {
    provide: DEALS_CLIENT,
    useFactory:  (configService: ClientConfigService) => {
      const clientOptions = configService.dealsClientOptions;
      return ClientProxyFactory.create(clientOptions);
    },
    inject: [ClientConfigService],
  },
  ],
 
})


export class DealsModule {}
