import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CashFlowService } from './cash-flow.service';
import { CreateCashFlowDto } from './dto/create-cash-flow.dto';
import { ApiTags } from '@nestjs/swagger';

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
  getDailyBalance() {
    return this.cashFlowService.getDailyBalance();
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
