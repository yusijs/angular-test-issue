import { HelpModule } from './help/help.module';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home.routes';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdSidenavModule, MdToolbarModule, MdIconModule, MdListModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    HelpModule,
    AppRoutingModule,
    MdSidenavModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdIconModule.forRoot(),
    MdListModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
