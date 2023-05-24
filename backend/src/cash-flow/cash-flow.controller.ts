import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CashFlowService } from './cash-flow.service';
import { CreateCashFlowDto } from './dto/create-cash-flow.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetDailyBalanceDto } from './dto/get-daily-balance.dto';

@ApiTags('cash-flow')
@Controller('cash-flow')
export class CashFlowController {
  constructor(private readonly cashFlowService: CashFlowService) {}

  @Post()
  create(@Body() createCashFlowDto: CreateCashFlowDto) {
    return this.cashFlowService.create(createCashFlowDto);
  }

  @Get()
  findAll() {
    return this.cashFlowService.findAll();
  }

  @Get('daily-balance')
  getDailyBalance(@Query() getDailyBalanceFlowDto: GetDailyBalanceDto) {
    return this.cashFlowService.getDailyBalance(getDailyBalanceFlowDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cashFlowService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cashFlowService.remove(+id);
  }
}
