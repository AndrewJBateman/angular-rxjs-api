import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from './core/services/search.service';
import { Article } from './core/interfaces/article.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-rxjs-api';
  articles$!: Observable<Article[]>;

  constructor(private readonly searchService: SearchService) {}

  onSearch(term: any) {
    this.articles$ = this.searchService.search(term);
    this.articles$.subscribe((res) => console.log('res: ', res));
  }
}
