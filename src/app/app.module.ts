import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyWebsiteModule } from './my-website/my-website.module';
import { LazyModule } from './lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyWebsiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
