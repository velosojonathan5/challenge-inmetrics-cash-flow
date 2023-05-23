import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCashFlowDto } from './dto/create-cash-flow.dto';
import { UpdateCashFlowDto } from './dto/update-cash-flow.dto';
import {
  CASH_FLOW_REPOSITORY_TOKEN,
  CashFlowRepository,
} from './repositories/cash-flow.repository.interface';
import { CashFlowType } from './entities/cash-flow.entity';

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

  async getDailyBalance() {
    let balance = 0;

    const casFlowList = await this.cashFlowRepository.findAll();
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
    };
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.cashFlowRepository.remove(id);
  }
}
