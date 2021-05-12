import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockExchangeDetailsComponent } from './stock-exchange-details.component';

describe('StockExchangeDetailsComponent', () => {
  let component: StockExchangeDetailsComponent;
  let fixture: ComponentFixture<StockExchangeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockExchangeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockExchangeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
