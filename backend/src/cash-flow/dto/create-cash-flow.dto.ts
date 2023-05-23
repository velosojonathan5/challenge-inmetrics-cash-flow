import { ApiProperty } from '@nestjs/swagger';
import { CashFlowType } from '../entities/cash-flow.entity';

export class CreateCashFlowDto {
  @ApiProperty()
  value: number;

  @ApiProperty({ enum: CashFlowType })
  type: CashFlowType;

  @ApiProperty()
  description: string;

  //   @ApiProperty()
  //   date: Date;
}
