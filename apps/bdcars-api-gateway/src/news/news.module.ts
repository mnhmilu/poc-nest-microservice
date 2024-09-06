// gateway/src/app.module.ts
import { Module } from '@nestjs/common';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { NEWS_CLIENT } from './constant';
import { ClientConfigModule } from '../client-config/client-config.module';
import { ClientConfigService } from '../client-config/client-config.service';

@Module({
  imports: [ClientConfigModule],
  controllers:[NewsController],
  providers: [
    NewsService,
  {
    provide: NEWS_CLIENT,
    useFactory:  (configService: ClientConfigService) => {
      const clientOptions = configService.newsClientOptions;
      return ClientProxyFactory.create(clientOptions);
    },
    inject: [ClientConfigService],
  },
  ],
 
})
export class NewsModule {}
