import { Component, OnInit } from '@angular/core';

import { Quote } from './quote';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-randomquote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {
  quote: Quote[];

  constructor(
    private quoteService: QuoteService,
  ) { }

  getQuote(): void {
    this.quoteService.getQuote().then(quote => this.quote = quote);
  }

  ngOnInit(): void {
    this.getQuote();
  }
}