import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { visitAll } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  obj : Observable<any>

  constructor(private http:HttpClient) { }
  gets(callback){
    this.obj = this.http.get('http://localhost:2019/gets')
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
    this.obj = this.http.get('http://localhost:2019/get/'+obj.id)
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
    this.obj = this.http.post('http://localhost:2019/save',visit)
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
    this.obj = this.http.post('http://localhost:2019/update',visit)
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
    this.obj = this.http.post('http://localhost:2019/remove',visit)
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
