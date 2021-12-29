import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './entry/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './styling/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './entry/about/about.component';
import { HeaderComponent } from './entry/header/header.component';
import { LoginComponent } from './entry/login/login.component';
import { RegisterComponent } from './entry/register/register.component';
import { CategoryComponent } from './entry/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
