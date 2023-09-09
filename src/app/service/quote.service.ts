import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  getQuote() {
    return this.http.get<quote[]>(
      'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1',
      {
        headers: {
          'X-RapidAPI-Key':
            '001b0334edmsh276aed4b928ead6p1eed90jsnc80e43dc44b1',
          'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
        },
      }
    );
  }
  getQuoteByCategory(category: string) {
    return this.http.get<quote[]>(
      `https://famous-quotes4.p.rapidapi.com/random?category=${category}&count=1`,
      {
        headers: {
          'X-RapidAPI-Key':
            '001b0334edmsh276aed4b928ead6p1eed90jsnc80e43dc44b1',
          'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
        },
      }
    );
  }


}

export interface quote {
  author: string;
  category: string;
  id?: number;
  text: string;
}
