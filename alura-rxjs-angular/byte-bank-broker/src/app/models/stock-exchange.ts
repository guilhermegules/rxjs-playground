export interface StockExchanges extends Array<StockExchange> {}

export interface StockExchange {
  id: number;
  code: string;
  description: string;
  price: number;
}

export interface StockExchangeAPI {
  payload: StockExchanges;
}
