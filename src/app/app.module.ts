import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [AppComponent, SpinnerComponent, NavbarComponent, ListNewsComponent, FormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
