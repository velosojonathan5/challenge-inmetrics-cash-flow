import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowAddDialogComponent } from './cash-flow-add-dialog.component';

describe('CashFlowAddDialogComponent', () => {
  let component: CashFlowAddDialogComponent;
  let fixture: ComponentFixture<CashFlowAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashFlowAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
