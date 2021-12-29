import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './entry/about/about.component';
import { CategoryComponent } from './entry/category/category.component';
import { HeaderComponent } from './entry/header/header.component';
import { LoginComponent } from './entry/login/login.component';
import { MainComponent } from './entry/main/main.component';
import { RegisterComponent } from './entry/register/register.component';

const routes: Routes = [
  {
    path:'home',
    component:MainComponent
  },



  {
    path:'headings',
    component:HeaderComponent,
    children:[
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'sign-up',
        component:RegisterComponent
      },

      {
        path:'categories',
        component:CategoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
