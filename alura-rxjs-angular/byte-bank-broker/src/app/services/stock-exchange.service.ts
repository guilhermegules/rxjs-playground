import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, tap } from 'rxjs/operators';

import {
  StockExchange,
  StockExchangeAPI,
  StockExchanges,
} from '../models/stock-exchange';
@Injectable({
  providedIn: 'root',
})
export class StockExchangeService {
  private readonly BASE_URL = 'http://localhost:3000/stockExchange';

  constructor(private http: HttpClient) {}

  public getStockExchanges(search?: string): Observable<StockExchanges> {
    const params = search ? new HttpParams().append('search', search) : null;
    return this.http.get<StockExchangeAPI>(`${this.BASE_URL}`, { params }).pipe(
      tap((stockExchanges) => {
        console.log(stockExchanges);
      }),
      distinctUntilChanged(),
      pluck('payload'),
      map((stockExchanges) =>
        stockExchanges.sort((a, b) => this.orderByCode(a, b))
      )
    );
  }

  private orderByCode(
    stockExchangeA: StockExchange,
    stockExchangeB: StockExchange
  ): number {
    if (stockExchangeA.code > stockExchangeB.code) return 1;

    if (stockExchangeA.code < stockExchangeB.code) return -1;

    return 0;
  }
}
