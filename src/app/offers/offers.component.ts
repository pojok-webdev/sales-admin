import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
columnDisplayed = ['kdoffer','offerdate','clientname','address','email','pic','phone','service','price','description','sale_id']
DataSource
  constructor(
    private offerservice : OfferService
  ) {
    this.offerservice.gets(result => {
      this.DataSource = result
    })
  }

  ngOnInit() {
  }

}
