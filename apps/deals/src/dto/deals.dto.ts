import { IsString, IsDate, IsNumber, isNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class DealDto {
  @IsNumber()
  id: number;

  @IsString()
  dealName: string;

  @IsDate()
  @Type(() => Date)
  expireDate: Date;

  @IsString()
  provider: string;

  @IsNumber()
  originalPrice: number;

  @IsNumber()
  discountPrice: number;
}
