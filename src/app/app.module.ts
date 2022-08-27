import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperheroEditComponent } from './_pages/superhero/superhero-edit/superhero-edit.component';
import { SuperHeroComponent } from './_pages/superhero/superhero.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroComponent,
    SuperheroEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
