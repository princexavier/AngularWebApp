import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs-compat/observable';
import 'rxjs-compat/add/operator/catch'
import { Observable } from 'rxjs-compat/observable';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private http :HttpClient, private url:string) { 
  }

  getAll(){
    return this.http.get(this.url)
  }
}
