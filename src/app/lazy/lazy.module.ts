import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { ListComponent } from './list.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [MovieListComponent, SeriesListComponent, ListComponent, DemoComponent],
  // exports:[MovieListComponent, SeriesListComponent,ListComponent]
})
export class LazyModule { }
