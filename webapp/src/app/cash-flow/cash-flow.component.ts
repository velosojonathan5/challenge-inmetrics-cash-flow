import { Component, OnInit } from '@angular/core';
import { CashFlowService } from './cash-flow.service';
import { MatDialog } from '@angular/material/dialog';
import { CashFlowAddDialogComponent } from '../cash-flow-add-dialog/cash-flow-add-dialog.component';
import { CashFlow } from './cash-flow.entity';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css'],
})
export class CashFlowComponent implements OnInit {
  displayedColumns: string[] = ['id', 'value', 'type', 'date', 'delete'];
  dataSource = [];

  constructor(private service: CashFlowService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.read();
  }

  read(): void {
    this.service.findAll().subscribe((resp: any) => {
      this.dataSource = resp;
    });
  }

  openNewIemDialog(): void {
    const dialogRef = this.dialog.open(CashFlowAddDialogComponent);

    dialogRef.afterClosed().subscribe((item: CashFlow) => {
      this.service.create(item).subscribe(() => {
        this.read();
      });
    });
  }

  remove(id: number): void {
    this.service.remove(id).subscribe(() => {
      this.read();
    });
  }
}
