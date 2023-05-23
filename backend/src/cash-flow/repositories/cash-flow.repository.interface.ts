import { CreateCashFlowDto } from '../dto/create-cash-flow.dto';
import { CashFlow } from '../entities/cash-flow.entity';

export interface CashFlowRepository {
  create(createCashFlowDto: CreateCashFlowDto): Promise<CashFlow>;

  findAll(): Promise<CashFlow[]>;

  findOne(id: number): Promise<CashFlow | null>;

  remove(id: number): void;
}

export const CASH_FLOW_REPOSITORY_TOKEN = 'cash-flow-repository-token';
