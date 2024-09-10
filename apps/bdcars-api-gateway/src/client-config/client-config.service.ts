import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class ClientConfigService {
  constructor(private config: ConfigService) {}

  getDealsClientPort(): number {
    return this.config.get<number>('DEALS_CLIENT_PORT');
  }
  getNewsClientPort(): number {
    return this.config.get<number>('NEWS_CLIENT_PORT');
  }

  get dealsClientOptions(): ClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        host:'deals',
        port: this.getDealsClientPort() },
    };
  }

  get newsClientOptions(): ClientOptions {
    return {
      transport: Transport.TCP,
      options: { 
        host:'news',
        port: this.getNewsClientPort() },
    };
  }


}
