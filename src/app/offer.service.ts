import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
obj: Observable<any>
  constructor(
    private http : HttpClient,
    private appvar : AppvarService
  ) { }
  gets(callback){
    this.obj = this.http.get(this.appvar.server+'offergets')
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
    this.obj = this.http.get(this.appvar.server+'offerget/'+obj.id)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  save(obj,callback){
    this.obj = this.http.post(this.appvar.server+'offersave',obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  update(obj,callback){
    this.obj = this.http.post(this.appvar.server+'offerupdate',obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  remove(obj,callback){
    this.obj = this.http.get(this.appvar.server+'offerremove'+obj.id)
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
