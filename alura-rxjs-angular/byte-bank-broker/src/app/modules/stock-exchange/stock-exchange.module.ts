import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { StockExchangeRoutingModule } from './stock-exchange-routing.module';
import { StockExchangeDetailsComponent } from './containers/stock-exchange-details/stock-exchange-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StockExchangeDetailsComponent],
  imports: [
    CommonModule,
    StockExchangeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class StockExchangeModule {}
