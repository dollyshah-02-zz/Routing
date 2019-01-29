import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HomeComponent, AboutUsComponent, ContactUsComponent, FeedbackComponent, SidebarComponent, ListComponent],
  exports:[HomeComponent, AboutUsComponent, ContactUsComponent, FeedbackComponent, SidebarComponent, ListComponent]
})
export class MyWebsiteModule { }
