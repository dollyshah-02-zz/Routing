import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './my-website/home/home.component';
import { AboutUsComponent } from './my-website/about-us/about-us.component';
import { ContactUsComponent } from './my-website/contact-us/contact-us.component';
import { FeedbackComponent } from './my-website/feedback/feedback.component';
import { SidebarComponent } from './my-website/sidebar/sidebar.component';
import { FeedbackFormComponent } from './my-website/feedback/feedback-form/feedback-form.component';
import { AbcComponent } from './my-website/feedback/feedback-form/abc/abc.component';
import { DeptComponent } from './my-website/dept/dept.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'sidebar',
        component: SidebarComponent
      }
    ]
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    children: [
      {
        path: 'feedback-form',
        component: FeedbackFormComponent,
        children: [
          {
            path: 'abc/:id',
            component:AbcComponent,
          }
        ]
      }
    ]
  },
  {
    path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'
  }]
  const route1:Routes=[
  {
    path:'dept' , component:DeptComponent
  }
  

]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(route1)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
