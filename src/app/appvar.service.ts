import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppvarService {
  server = 'http://localhost:2019/'
  constructor() { }
}
