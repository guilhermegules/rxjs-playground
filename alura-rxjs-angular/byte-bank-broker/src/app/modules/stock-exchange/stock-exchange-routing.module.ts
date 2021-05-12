import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockExchangeDetailsComponent } from './containers/stock-exchange-details/stock-exchange-details.component';

const routes: Routes = [
  {
    path: '',
    component: StockExchangeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockExchangeRoutingModule {}
