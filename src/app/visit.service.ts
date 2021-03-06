import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  obj : Observable<any>

  constructor(
    private http : HttpClient,
    private appvar : AppvarService
  ) { }
  gets(callback){
    this.obj = this.http.get(this.appvar.server+'visitgets')
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  get(obj,callback){
    this.obj = this.http.get(this.appvar.server+'visitget/'+obj.id)
    this.obj.subscribe(
      data => {
        callback(data[0])
      },
      err => {
        callback(err)
      }
    )
  }
  save(visit,callback){
    this.obj = this.http.post(this.appvar.server+'visitsave',visit)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  update(visit, callback){
    this.obj = this.http.post(this.appvar.server+'visitupdate',visit)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  remove(visit,callback){
    this.obj = this.http.get(this.appvar.server+'visitremove/'+visit.id)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
}
