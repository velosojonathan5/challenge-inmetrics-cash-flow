export enum CashFlowType {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

export class CashFlow {
  id: number;

  value: number;

  type: CashFlowType;

  description: string;

  date: Date;
}
