import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,EmpComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //bootstrap-->startup object
})
export class AppModule { }
