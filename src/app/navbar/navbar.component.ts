import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { QuoteService, quote } from '../service/quote.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  categoryForm!: FormGroup;
  category = 'all';
  gradient =
    'linear-gradient(to right top, #5800ff, #0073ff, #00a3ff, #00c9ff, #00e9ff)';
  categoryArray!: quote;

  options: string[] = [
    'all',
    'age',
    'alone',
    'amazing',
    'anger',
    'anniversary',
    'architecture',
    'art',
    'attitude',
    'beauty',
    'best',
    'birthday',
    'business',
    'car',
    'change',
    'communication',
    'computers',
    'cool',
    'courage',
    'dad',
    'dating',
    'death',
    'design',
    'diet',
    'dreams',
    'education',
    'environmental',
    'equality',
    'experience',
    'failure',
    'faith',
    'family',
    'famous',
    'fear',
    'finance',
    'fitness',
    'food',
    'forgiveness',
    'freedom',
    'friendship',
    'funny',
    'future',
    'gardening',
    'god',
    'good',
    'government',
    'graduation',
    'great',
    'happiness',
    'health',
    'history',
    'home',
    'hope',
    'humor',
    'imagination',
    'inspirational',
    'intelligence',
    'jealousy',
    'knowledge',
    'leadership',
    'learning',
    'legal',
    'life',
    'love',
    'marriage',
    'medical',
    'men',
    'mom',
    'money',
    'morning',
    'motivational',
    'movies',
    'movingon',
    'music',
    'nature',
    'parenting',
    'patience',
    'patriotism',
    'peace',
    'pet',
    'poetry',
    'politics',
    'positive',
    'power',
    'relationship',
    'religion',
    'respect',
    'romantic',
    'sad',
    'science',
    'smile',
    'society',
    'sports',
    'strength',
    'success',
    'sympathy',
    'teacher',
    'technology',
    'teen',
    'thankful',
    'time',
    'travel',
    'trust',
    'truth',
    'war',
    'wedding',
    'wisdom',
    'women',
    'work',
    'christmas',
    'easter',
    'fathersday',
    'memorialday',
    'mothersday',
    'newyears',
    'saintpatricksday',
    'thanksgiving',
    'valentinesday',
  ];

  constructor(private quoteService: QuoteService) {}
  ngOnInit() {
    this.categoryForm = new FormGroup({
      category: new FormControl({ value: 'all', disabled: false }),
    });
  }

  onRefresh() {
    this.categoryArray = this.categoryForm.getRawValue();
    this.category = this.categoryArray.category;
    console.log(this.category);
  }
  changeCategory(): void {
    // Change the value of parentCategory to trigger the ngOnChanges in the child component.
    this.categoryArray = this.categoryForm.getRawValue();
    this.category = this.categoryArray.category;
  }
}
