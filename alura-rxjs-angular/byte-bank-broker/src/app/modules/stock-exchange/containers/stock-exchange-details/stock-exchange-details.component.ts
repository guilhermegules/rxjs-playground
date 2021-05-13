import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { merge, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';

import { StockExchanges } from '../../../../models/stock-exchange';
import { StockExchangeService } from '../../../../services/stock-exchange.service';

@Component({
  selector: 'app-stock-exchange-details',
  templateUrl: './stock-exchange-details.component.html',
  styleUrls: ['./stock-exchange-details.component.scss'],
})
export class StockExchangeDetailsComponent implements OnInit {
  public formGroup: FormGroup;
  public stockExchangeData$: Observable<StockExchanges>;
  public allStockExchanges$ = this.stockExchange.getStockExchanges();
  public searchValue$: Observable<StockExchanges>;

  private readonly WAIT_FOR_TRIGGER = 300;

  constructor(
    private stockExchange: StockExchangeService,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.formGroup = this.fb.group({
      stockExchangeSearch: null,
    });

    this.searchValue$ = this.formGroup
      .get('stockExchangeSearch')
      .valueChanges.pipe(
        debounceTime(this.WAIT_FOR_TRIGGER),
        filter(
          (searchedValue) => searchedValue.length >= 3 || !searchedValue.length
        ),
        distinctUntilChanged(),
        switchMap((search) => this.stockExchange.getStockExchanges(search))
      );

    this.stockExchangeData$ = merge(this.allStockExchanges$, this.searchValue$);
  }
}
