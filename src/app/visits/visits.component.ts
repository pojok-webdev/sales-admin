import { Component, OnInit } from '@angular/core';
import { VisitService } from '../visit.service';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {
dataSource
displayedColumns = ["client","address","pic","position","phone"]
  constructor(
    private visitService : VisitService
  ) {
    this.visitService.get(result => {
      console.log("datasource",result)
      this.dataSource = result
    })
  }

  ngOnInit() {
  }
  save(visit){
    this.visitService.save(visit,result => {
      console.log("Result",result)
    })
  }
}
