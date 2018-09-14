import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.css']
})
export class OfferAddComponent implements OnInit {
offer = {
  kdoffer:'',
  offerdate:'',
  clientname:'',
  address:'',
  email:'',
  pic:'',
  phone:'',
  service:'',
  price:'',
  description:'',
  sale_id:''
}
  constructor(
    private offerservice : OfferService
  ) { }

  ngOnInit() {
  }
  save(offer){
    this.offerservice.save(offer, result => {
      console.log("Result",result)
    })
  }
}
