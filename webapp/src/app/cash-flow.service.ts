import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CashFlow } from './cash-flow/cash-flow.entity';
import { Observable } from 'rxjs';
interface DailyBalance {
  balance: number;
  rows: CashFlow[];
}

@Injectable({
  providedIn: 'root',
})
export class CashFlowService {
  private url = 'http://localhost:3000/cash-flow';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(this.url);
  }

  create(item: CashFlow) {
    return this.http.post(this.url, item);
  }

  remove(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  getBalance(date: Date) {
    return this.http.get(this.url + '/daily-balance', {
      params: { date: date.toISOString() },
    }) as Observable<DailyBalance>;
  }
}
