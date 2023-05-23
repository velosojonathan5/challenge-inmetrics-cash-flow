import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CashFlow } from '../../entities/cash-flow.entity';
import { CashFlowTypeorm } from './cash-flow.typeorm.entity';
import { CashFlowRepository } from '../cash-flow.repository.interface';
import { Repository } from 'typeorm';
import { CreateCashFlowDto } from '../../dto/create-cash-flow.dto';

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

  findAll(): Promise<CashFlow[]> {
    return this.repository.find({ order: { date: 'DESC' } });
  }

  findOne(id: number): Promise<CashFlow | null> {
    return this.repository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
