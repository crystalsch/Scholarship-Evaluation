import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './home/add-new/add-new.component';
import { ParentComponent } from './home/parent/parent.component';

const routes: Routes = [
  { path: "", component: ParentComponent, pathMatch:"full" },
  { path: "app-add-new", component: AddNewComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
