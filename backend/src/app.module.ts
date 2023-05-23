import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CashFlowModule } from './cash-flow/cash-flow.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateCashFlowDto } from './cash-flow/dto/create-cash-flow.dto';
import { CashFlowTypeorm } from './cash-flow/repositories/implementations/cash-flow.typeorm.entity';

@Module({
  imports: [
    CashFlowModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'my-secret-pw',
      database: 'cash_flow',
      entities: [CashFlowTypeorm],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
