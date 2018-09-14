import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VisitsComponent } from './visits/visits.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule, MatInputModule, MatMenuModule, MatButtonModule, MatTableModule, MatDialogModule, MatGridListModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VisitAddComponent } from './visit-add/visit-add.component';
import { VisitEditComponent } from './visit-edit/visit-edit.component';
import { VisitRemoveDialogComponent } from './visit-remove-dialog/visit-remove-dialog.component';
import { OffersComponent } from './offers/offers.component';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';
import { OfferRemoveDialogComponent } from './offer-remove-dialog/offer-remove-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    VisitsComponent,
    VisitAddComponent,
    VisitEditComponent,
    VisitRemoveDialogComponent,
    OffersComponent,
    OfferAddComponent,
    OfferEditComponent,
    OfferRemoveDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[VisitRemoveDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
