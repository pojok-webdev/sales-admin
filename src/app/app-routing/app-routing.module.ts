import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { VisitsComponent } from '../visits/visits.component';
import { VisitAddComponent } from '../visit-add/visit-add.component';
const routing : Routes = [
  {path:'visits',component:VisitsComponent},
  {path:'visit-add',component:VisitAddComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routing)
  ],
  declarations: []
})
export class AppRoutingModule { }
