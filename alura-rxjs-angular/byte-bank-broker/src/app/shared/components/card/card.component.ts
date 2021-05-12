import { Component, Input, OnInit } from '@angular/core';

import { StockExchange } from '../../../models/stock-exchange';
import { StockExchangeService } from '../../../services/stock-exchange.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: StockExchange;
}
