import { Component, OnInit, Inject } from '@angular/core';
import { VisitService } from '../visit.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-visit-remove-dialog',
  templateUrl: './visit-remove-dialog.component.html',
  styleUrls: ['./visit-remove-dialog.component.css']
})
export class VisitRemoveDialogComponent implements OnInit {
title = ""
visit
  constructor(
    private visitService : VisitService,
    private dialogRef : MatDialogRef<VisitRemoveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data : any 
  ) {
    console.log("Data",data)
    this.title = data.title
    this.visit = data.visit
  }

  ngOnInit() {
  }
  remove(visit){
    this.visitService.remove(visit, result => {
      console.log("remove result",result)
      this.dialogRef.close()
    })
  }
  closeDialog(){
    this.dialogRef.close()
  }
}
