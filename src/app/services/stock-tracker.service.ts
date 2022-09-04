import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stocks } from '../models/stock';

@Injectable()
export class StockTrackerService {
  apiEnpointyUrl: string = 'https://finnhub.io/api/v1/';
  constructor(private http: HttpClient) {}

  getSentiment(symbol: string, from: string, to: string) {
    return this.http.get(
      `${this.apiEnpointyUrl}stock/insider-sentiment?symbol=${symbol}&from=${from}&to=${to}&token=bu4f8kn48v6uehqi3cqg`
    );
  }

  setDataIntoStore(stockDisplayList: Stocks[]) {
    localStorage.setItem('stockData', JSON.stringify(stockDisplayList));
  }

  getStckCompanyNames(symbol: string) {
    return this.http.get(
      `${this.apiEnpointyUrl}search?q=${symbol}&token=bu4f8kn48v6uehqi3cqg`
    );
  }

  getQuotesInfo(symbol: string) {
    return this.http.get(
      `${this.apiEnpointyUrl}quote?symbol=${symbol}&token=bu4f8kn48v6uehqi3cqg`
    );
  }
}
