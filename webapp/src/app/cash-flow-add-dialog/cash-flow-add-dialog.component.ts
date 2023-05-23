import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CashFlow, CashFlowType } from '../cash-flow/cash-flow.entity';

@Component({
  selector: 'app-cash-flow-add-dialog',
  templateUrl: './cash-flow-add-dialog.component.html',
  styleUrls: ['./cash-flow-add-dialog.component.css'],
})
export class CashFlowAddDialogComponent {
  types = [
    {
      value: CashFlowType.DEBIT,
      viewValue: 'Débito',
    },
    {
      value: CashFlowType.CREDIT,
      viewValue: 'Crédito',
    },
  ];

  cashFlowItem = new CashFlow();

  constructor(public dialogRef: MatDialogRef<CashFlowAddDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.dialogRef.close(this.cashFlowItem);
  }
}
