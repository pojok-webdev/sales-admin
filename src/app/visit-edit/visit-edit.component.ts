import { Component, OnInit } from '@angular/core';
import { VisitService } from '../visit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visit-edit',
  templateUrl: './visit-edit.component.html',
  styleUrls: ['./visit-edit.component.css']
})
export class VisitEditComponent implements OnInit {
visit = {
  id:0,
  client:'',
  address:'',
  pic:'',
  phone:'',
  position:'',
  aim:'',
  transport:''
}
  constructor(
    private visitservice : VisitService,
    private activatedRoute : ActivatedRoute
  ) {
    this.visit.id = this.activatedRoute.snapshot.params.id
    console.log("Id : ", this.visit.id)
    this.visitservice.get({id:this.visit.id},result => {
      this.visit = result
    })
  }

  ngOnInit() {
  }
  update(visit){
    this.visitservice.update(visit, result => {
      console.log("update result",result)
    })
  }
}
