import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  obj : Observable<any>

  constructor(private http:HttpClient) { }
  get(callback){
    this.obj = this.http.get('http://localhost:2019/get')
    this.obj.subscribe(
      data => {
        callback(data)
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
    callback(visit)
  }
  update(){}
  remove(){}
}
