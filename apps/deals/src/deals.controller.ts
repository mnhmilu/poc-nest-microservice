import { Controller, Get } from '@nestjs/common';
import { DealsService } from './deals.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @MessagePattern('deals.findAll')
  findAll() {
    return this.dealsService.findAll();
  }
}
