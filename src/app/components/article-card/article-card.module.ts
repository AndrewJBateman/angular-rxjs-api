import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card.component';



@NgModule({
  declarations: [
    ArticleCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticleCardComponent
  ]
})
export class ArticleCardModule { }
