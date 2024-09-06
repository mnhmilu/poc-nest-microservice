import { Injectable, NotFoundException } from '@nestjs/common';
import { DealDto } from './dto/deals.dto';



@Injectable()
export class DealsService {
  private deals: DealDto[] = [
    {
      id: 1,
      dealName: 'Winter Sale',
      expireDate: new Date('2024-12-31'),
      provider: 'Provider A',
      originalPrice: 500,
      discountPrice: 350,
    },
    {
      id: 2,
      dealName: 'Summer Discount',
      expireDate: new Date('2024-08-15'),
      provider: 'Provider B',
      originalPrice: 600,
      discountPrice: 450,
    },
  ];


  findAll() {
    return this.deals;
  }

  
}
