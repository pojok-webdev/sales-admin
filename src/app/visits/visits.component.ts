import { Component, OnInit } from '@angular/core';
import { VisitService } from '../visit.service';
import { MatDialog } from '@angular/material';
import { VisitRemoveDialogComponent } from '../visit-remove-dialog/visit-remove-dialog.component';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {
dataSource
displayedColumns = ["client","address","pic","position","phone","actions"]
  constructor(
    private visitService : VisitService,
    private dialog : MatDialog
  ) {
    this.visitService.gets(result => {
      console.log("datasource",result)
      this.dataSource = result
    })
  }

  ngOnInit() {
  }
  remove(visit){
    const _dialog = this.dialog.open(VisitRemoveDialogComponent,{
      width:'500px',
      data: {
        title:'Are you sure want to remove ',
        visit:visit
      }
    })
    _dialog.afterClosed().subscribe(
      result => {
        this.visitService.gets(result => {
          console.log("datasource",result)
          this.dataSource = result
        })    
      }
    )
  }
}
