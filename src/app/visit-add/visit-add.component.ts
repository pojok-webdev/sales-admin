import { Component, OnInit } from '@angular/core';
import { VisitService } from '../visit.service';

@Component({
  selector: 'app-visit-add',
  templateUrl: './visit-add.component.html',
  styleUrls: ['./visit-add.component.css']
})
export class VisitAddComponent implements OnInit {
  visit = {
    client:'',
    address:'',
    pic:'',
    phone:'',
    position:'',
    aim:'',
    transport:''
  }
  constructor(private visitService:VisitService) { }

  ngOnInit() {
  }
  save(visit){
    this.visitService.save(visit,result => {
      console.log("Result",result)
      window.location.href = '/visits'
    })
  }
}
