import { TestBed } from '@angular/core/testing';

import { StockExchangeService } from './stock-exchange.service';

describe('StockExchangeService', () => {
  let service: StockExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
