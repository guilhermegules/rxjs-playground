import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockExchanges } from '../models/stock-exchange';

@Injectable({
  providedIn: 'root',
})
export class StockExchangeService {
  private readonly BASE_URL = 'http://localhost:3000/stockExchange';

  constructor(private http: HttpClient) {}

  public getStockExchanges(): Observable<StockExchanges> {
    return this.http.get<StockExchanges>(this.BASE_URL);
  }
}
