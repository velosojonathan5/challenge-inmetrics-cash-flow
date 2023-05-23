import { Module } from '@nestjs/common';
import { CashFlowService } from './cash-flow.service';
import { CashFlowController } from './cash-flow.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CashFlowTypeorm } from './repositories/implementations/cash-flow.typeorm.entity';
import { CASH_FLOW_REPOSITORY_TOKEN } from './repositories/cash-flow.repository.interface';
import { CashFlowTypeormRepository } from './repositories/implementations/cash-flow.typeorm.repository';

@Module({
  controllers: [CashFlowController],
  providers: [
    CashFlowService,
    {
      provide: CASH_FLOW_REPOSITORY_TOKEN,
      useClass: CashFlowTypeormRepository,
    },
  ],
  imports: [TypeOrmModule.forFeature([CashFlowTypeorm])],
})
export class CashFlowModule {}
