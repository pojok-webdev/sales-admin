import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { VisitsComponent } from '../visits/visits.component';
import { VisitAddComponent } from '../visit-add/visit-add.component';
import { VisitEditComponent } from '../visit-edit/visit-edit.component';
import { OffersComponent } from '../offers/offers.component';
import { OfferAddComponent } from '../offer-add/offer-add.component';
import { OfferEditComponent } from '../offer-edit/offer-edit.component';
const routing : Routes = [
  {path:'visits',component:VisitsComponent},
  {path:'visit-add',component:VisitAddComponent},
  {path:'visit-edit/:id',component:VisitEditComponent},
  {path:'offers',component:OffersComponent},
  {path:'offer-add',component:OfferAddComponent},
  {path:'offer-edit/:id',component:OfferEditComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routing)
  ],
  declarations: []
})
export class AppRoutingModule { }
