import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CashFlowService } from '../cash-flow.service';

@Component({
  selector: 'app-cash-flow-extract-dialog',
  templateUrl: './cash-flow-extract-dialog.component.html',
  styleUrls: ['./cash-flow-extract-dialog.component.css'],
})
export class CashFlowExtractDialogComponent {
  date = new Date();

  constructor(
    public dialogRef: MatDialogRef<CashFlowExtractDialogComponent>,
    private service: CashFlowService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.service.getBalance(this.date).subscribe((result) => {
      let csvString = `balance;${result.balance}\n`;

      if (result.rows.length === 0) {
        alert('Sem dados');
        return;
      }

      var headers = Object.keys(result.rows[0]);

      csvString += headers.join(';') + '\n';

      result.rows.forEach(function (row) {
        var values = Object.values(row);
        csvString += values.join(';') + '\n';
      });

      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

      // Create a link element to download the CSV file
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'relatorio_diario.csv';
      document.body.appendChild(link);
      link.click();
    });
  }
}
