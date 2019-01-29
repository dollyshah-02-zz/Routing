import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './my-website/home/home.component';
import { AboutUsComponent } from './my-website/about-us/about-us.component';
import { ContactUsComponent } from './my-website/contact-us/contact-us.component';
import { FeedbackComponent } from './my-website/feedback/feedback.component';
import { ListComponent } from './my-website/list/list.component';
import { SidebarComponent } from './my-website/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'list', component: ListComponent },
      { path: 'sidebar', component: SidebarComponent }
    ]
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'feedback', component: FeedbackComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
