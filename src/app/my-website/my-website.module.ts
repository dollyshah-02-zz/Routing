import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FeedbackFormComponent } from './feedback/feedback-form/feedback-form.component';
import { AbcComponent } from './feedback/feedback-form/abc/abc.component';
import { DeptComponent } from './dept/dept.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ],
  declarations: [HomeComponent, AboutUsComponent, ContactUsComponent, FeedbackComponent, SidebarComponent, FeedbackFormComponent, AbcComponent, DeptComponent],
 })
export class MyWebsiteModule { }
