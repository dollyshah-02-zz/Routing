import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { ListComponent } from './list.component';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
  {
    path: '', component: ListComponent, pathMatch: 'full'
  },
  {
    path: 'movielist', component: MovieListComponent
  },
  {
    path: 'serieslist', component: SeriesListComponent
  }
]
const route1:Routes=[
  { path:'demo', component:DemoComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forChild(route1)
  ],
  exports: [
    RouterModule
  ]
})
export class LazyRoutingModule { }
