import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  url="https://vast-shore-74260.herokuapp.com/banks?city=";

  constructor(private http:HttpClient) { }

  get(value){
    console.log(this.url+value)
    return this.http.get(this.url+value);
  }
}
