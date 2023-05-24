import { ApiProperty } from '@nestjs/swagger';

export class FindCashFlowDto {
  @ApiProperty()
  dateStart?: Date;

  @ApiProperty()
  dateEnd?: Date;
}
