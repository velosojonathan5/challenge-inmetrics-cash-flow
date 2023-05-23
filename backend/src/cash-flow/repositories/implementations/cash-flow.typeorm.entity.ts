import { CashFlow, CashFlowType } from '../../entities/cash-flow.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'cash_flow' })
export class CashFlowTypeorm implements CashFlow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  type: CashFlowType;

  @Column()
  description: string;

  @CreateDateColumn()
  date: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
