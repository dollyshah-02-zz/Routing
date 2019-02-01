import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { PracticeComponent } from '../practice/practice.component';
const route:Routes=[
  { path:'/practice', component:PracticeComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule
  ]
})
export class PracticeRoutingModule { }
