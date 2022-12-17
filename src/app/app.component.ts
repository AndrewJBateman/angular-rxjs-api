import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from './core/services/search.service';
import { Article } from './core/interfaces/article.interface';

@Component({
  selector: 'app-root',
  template: `<div class="container">
  <h1 class="m-3">Wiki Search Panel</h1>
  <app-search (submitted)="onSearch($event)"></app-search>
  <ng-container *ngFor="let article of articles$ | async">
    <app-article-card [article]="article"></app-article-card>
  </ng-container>
</div>`
})
export class AppComponent {
  title = 'angular-rxjs-api';
  articles$!: Observable<Article[]>;

  constructor(private readonly searchService: SearchService) { }

  onSearch(term: any) {
    this.articles$ = this.searchService.search(term);
  }
}
