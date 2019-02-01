import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateTo() {
    // this.router.navigateByUrl('/home');
    console.log(this.router.navigated);//true
    // this.router.dispose();//will dispose the router i.e it wil not navigate
    // this.router.initialNavigation();
    this.router.navigate(['/feedback/feedback-form/abc/1']);
    // this.router.setUpLocationChangeListener();
    // let route=this.router.createUrlTree(['/feedback/' , 'feedback-form']);
    // let route2=this.router.parseUrl('/contact-us');
    //  this.router.navigateByUrl('/feedback/feedback-form/abc/1');
    // this.router.navigateByUrl(route2);
  }
}
