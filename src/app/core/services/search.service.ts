import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { WikipediaResponse, Article } from '../interfaces/article.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private readonly http: HttpClient) { }

  search(term: string): Observable<Article[]> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: term,
      utf8: '1',
      origin: '*',
    };
    return this.http
      .get<WikipediaResponse>(environment.api, { params })
      .pipe(
        // tap(x => console.log(`query`, x.query.search)),
        map(x => x.query.search)
      )
  }
}
