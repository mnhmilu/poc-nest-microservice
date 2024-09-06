import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DEALS_CLIENT } from './constant';

@Injectable()
export class DealsService {

    constructor(@Inject(DEALS_CLIENT) private dealsClient:ClientProxy){}

   findAll()
   { 
    return this.dealsClient.send('deals.findAll',{})
   }

}
