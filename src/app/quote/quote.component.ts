import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { QuoteService, quote } from '../service/quote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit, OnChanges {
  quotes!: quote[];
  message!: string;
  author!: string;
  error=false;
  @Input() category!: string;
  constructor(private quoteService: QuoteService,
   ) {}
  ngOnInit(): void {
    this.quoteService.getQuoteByCategory(this.category).subscribe(
      (data) => {
      this.quotes = data;
      // console.log(this.quotes);

      this.message = this.quotes[0].text;
      this.author = this.quotes[0].author;
    },
    (error)=>{
      this.error = true;
      this.message = "Error! API call failed. Try again later."
    }
    
    
    );

    // console.log(this.gradient);



  }
  gradient =
    'linear-gradient(to right top, #5800ff, #0073ff, #00a3ff, #00c9ff, #00e9ff)';
  gradients: string[] = [
    'linear-gradient(to right top, #5800ff, #0073ff, #00a3ff, #00c9ff, #00e9ff)',
    'linear-gradient(to right top, #ff0000, #ff6700, #ff9e00, #ffd000, #fffe00)',
    'linear-gradient(to right top, #ff0000, #ff0052, #f80093, #c200d0, #474ffb)',
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && !changes['category'].firstChange) {
      // Access the category property using square brackets and the property name as a string.
      const newCategoryValue = changes['category'].currentValue;

      // console.log('New category value:', newCategoryValue);
      this.quoteService
        .getQuoteByCategory(newCategoryValue)
        .subscribe((data) => {
          this.quotes = data;
          console.log(this.quotes);

          this.message = this.quotes[0].text;
          this.author = this.quotes[0].author;
        });
    }
  }
  changeCategory() {
    console.log(this.category);

    this.quoteService.getQuoteByCategory(this.category).subscribe((data) => {
      this.quotes = data;
      // console.log(this.quotes);

      this.message = this.quotes[0].text;
      this.author = this.quotes[0].author;
    });
  }
}
