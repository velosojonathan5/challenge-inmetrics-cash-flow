import { ApiProperty } from '@nestjs/swagger';

export class GetDailyBalanceDto {
  @ApiProperty()
  date: string;
}
