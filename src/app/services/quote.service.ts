/* Thanks to P1xt for pointing out to use jsonp instead of json because of CORS
    https://medium.com/@P1xt/fcc-speedrun-random-quote-machine-80fbfa4a8374 */

import { Injectable } from '@angular/core';
import { JsonpModule, Jsonp, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Quote } from '../classes/quote';

@Injectable()
export class QuoteService {
    private quoteUrl = 'http://api.forismatic.com/api/1.0/'; // URL to web api

    constructor(private jsonp: Jsonp) { }

    getQuote(): Promise<Quote[]> {
      const params = new URLSearchParams();
      params.set('method', 'getQuote');
      params.set('format', 'jsonp');
      // params.set('key', '457653');
      params.set('lang', 'en');
      params.set('jsonp', 'JSONP_CALLBACK');

      return this.jsonp.request(this.quoteUrl, { params: params })
                .toPromise()
                .then(response => response.json() as Quote[])
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
}
