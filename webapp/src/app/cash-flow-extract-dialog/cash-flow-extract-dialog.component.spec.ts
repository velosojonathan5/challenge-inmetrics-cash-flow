import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowExtractDialogComponent } from './cash-flow-extract-dialog.component';

describe('CashFlowExtractDialogComponent', () => {
  let component: CashFlowExtractDialogComponent;
  let fixture: ComponentFixture<CashFlowExtractDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowExtractDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashFlowExtractDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
