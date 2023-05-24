import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CashFlow } from '../../entities/cash-flow.entity';
import { CashFlowTypeorm } from './cash-flow.typeorm.entity';
import { CashFlowRepository } from '../cash-flow.repository.interface';
import { Repository } from 'typeorm';
import { CreateCashFlowDto } from '../../dto/create-cash-flow.dto';
import { FindCashFlowDto } from 'src/cash-flow/dto/find-cash-flow.dto';

@Injectable()
export class CashFlowTypeormRepository implements CashFlowRepository {
  constructor(
    @InjectRepository(CashFlowTypeorm)
    private repository: Repository<CashFlow>,
  ) {}

  create(createCashFlowDto: CreateCashFlowDto): Promise<CashFlow> {
    const item = this.repository.create(createCashFlowDto);
    return this.repository.save(item);
  }

  findAll(findCashFlowDto?: FindCashFlowDto): Promise<CashFlow[]> {
    const queryBuilder = this.repository.createQueryBuilder('cash_flow');

    if (
      findCashFlowDto &&
      findCashFlowDto.dateStart &&
      findCashFlowDto.dateEnd
    ) {
      queryBuilder
        .where(`cash_flow.date >= :dateStart`, {
          dateStart: findCashFlowDto.dateStart.toISOString(),
        })
        .andWhere(`cash_flow.date <= :dateEnd`, {
          dateEnd: findCashFlowDto.dateEnd.toISOString(),
        });
    }

    return queryBuilder.getMany();
  }

  findOne(id: number): Promise<CashFlow | null> {
    return this.repository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
