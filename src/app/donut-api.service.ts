import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donut } from './donut';

@Injectable({
  providedIn: 'root'
})
export class DonutApiService {

  constructor(private http:HttpClient) { }

  getDonuts():any{
    return this.http.get("https://grandcircusco.github.io/demo-apis/donuts.json");
  }
  getSingleDonut(id:number):any{
    return this.http.get(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`);
  }
}
