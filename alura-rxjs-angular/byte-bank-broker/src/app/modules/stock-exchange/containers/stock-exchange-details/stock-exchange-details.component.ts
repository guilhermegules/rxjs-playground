import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { StockExchanges } from '../../../../models/stock-exchange';
import { StockExchangeService } from '../../../../services/stock-exchange.service';

@Component({
  selector: 'app-stock-exchange-details',
  templateUrl: './stock-exchange-details.component.html',
  styleUrls: ['./stock-exchange-details.component.scss'],
})
export class StockExchangeDetailsComponent implements OnInit {
  public stockExchangeData$: Observable<StockExchanges>;

  constructor(private stockExchange: StockExchangeService) {}

  public ngOnInit(): void {
    this.stockExchangeData$ = this.stockExchange.getStockExchanges();
  }
}
