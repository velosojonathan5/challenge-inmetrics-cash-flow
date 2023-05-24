import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCashFlowDto } from './dto/create-cash-flow.dto';
import {
  CASH_FLOW_REPOSITORY_TOKEN,
  CashFlowRepository,
} from './repositories/cash-flow.repository.interface';
import { CashFlowType } from './entities/cash-flow.entity';
import { FindCashFlowDto } from './dto/find-cash-flow.dto';
import { GetDailyBalanceDto } from './dto/get-daily-balance.dto';

class GetDailyBalanceFlowDto {
  date: string;
}

@Injectable()
export class CashFlowService {
  constructor(
    @Inject(CASH_FLOW_REPOSITORY_TOKEN)
    private cashFlowRepository: CashFlowRepository,
  ) {}

  create(createCashFlowDto: CreateCashFlowDto) {
    return this.cashFlowRepository.create(createCashFlowDto);
  }

  findAll() {
    return this.cashFlowRepository.findAll();
  }

  async findOne(id: number) {
    const cashFlow = await this.cashFlowRepository.findOne(id);

    if (!cashFlow) {
      throw new NotFoundException();
    }

    return cashFlow;
  }

  async getDailyBalance(getDailyBalanceDto: GetDailyBalanceDto) {
    let balance = 0;

    const findCashFlowDto = new FindCashFlowDto();

    findCashFlowDto.dateStart = new Date(getDailyBalanceDto.date);
    findCashFlowDto.dateStart.setHours(0);
    findCashFlowDto.dateStart.setMinutes(0);
    findCashFlowDto.dateStart.setSeconds(0);

    findCashFlowDto.dateEnd = new Date(getDailyBalanceDto.date);
    findCashFlowDto.dateEnd.setHours(23);
    findCashFlowDto.dateEnd.setMinutes(59);
    findCashFlowDto.dateEnd.setSeconds(59);

    const casFlowList = await this.cashFlowRepository.findAll(findCashFlowDto);
    casFlowList.forEach((c) => {
      if (c.type === CashFlowType.CREDIT) {
        balance += c.value;
      }
      if (c.type === CashFlowType.DEBIT) {
        balance -= c.value;
      }
    });

    return {
      balance,
      rows: casFlowList,
    };
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.cashFlowRepository.remove(id);
  }
}
