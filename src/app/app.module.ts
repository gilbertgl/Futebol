import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GetAllLocalComponent } from './local/getAll-local/getAll-local.component';
import { SetLocalComponent } from './local/set-local/set-local.component';
import { GetLocalComponent } from './local/get-local/get-local.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllLocalComponent,
    SetLocalComponent,
    GetLocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
