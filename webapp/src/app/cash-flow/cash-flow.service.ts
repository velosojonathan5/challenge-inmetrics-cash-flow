import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CashFlow } from './cash-flow.entity';
@Injectable({
  providedIn: 'root',
})
export class CashFlowService {
  url = 'http://localhost:3000/cash-flow';

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
}
