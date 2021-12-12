import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './components/search/search.module';
import { ArticleCardModule } from './components/article-card/article-card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SearchModule, HttpClientModule, ArticleCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
