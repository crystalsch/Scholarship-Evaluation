import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalBoxComponent } from './internal-box/internal-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AddNewComponent } from './add-new/add-new.component';
import {  MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from '../app-routing.module';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    InternalBoxComponent,
    ParentComponent,
    AddNewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatInputModule
  ],
  exports:[
    ParentComponent
  ]
})
export class HomeModule { }
