import { Component, OnInit } from '@angular/core';

import { Quote } from '../../classes/quote';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-randomquote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {
  quote: Quote[];

  public tweetUrl = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';

  constructor(
    public quoteService: QuoteService
  ) { }

  getQuote(): void {
    this.quoteService.getQuote()
    .then(quote => this.quote = quote);
  }

  ngOnInit(): void {
    this.getQuote();
  }
}
