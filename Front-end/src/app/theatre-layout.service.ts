import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheatreLayoutService {
  
  constructor(private http:HttpClient) { }

  private _url: string="http://172.23.238.170:9001/api/v1/show/";
  // hit api to get layout data corresponding to a showId and return it to
  // theatre-layout component

  getShowlayout(id){
    console.log('Called the Show Layout');
    console.log('Inside the servce.ts '+`${this._url}${id}`);
    return this.http.get(this._url + id);
  }
}
