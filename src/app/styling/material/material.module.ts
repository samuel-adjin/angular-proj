import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

const materialComponets = [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponets
  ],
  exports:[materialComponets],
})
export class MaterialModule { }
