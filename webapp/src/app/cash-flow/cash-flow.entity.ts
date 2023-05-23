export enum CashFlowType {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

export class CashFlow {
  id = 0;

  value = 0;

  type = CashFlowType.DEBIT;

  description = '';

  date = new Date();
}
