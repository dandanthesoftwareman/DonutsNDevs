import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevApiService {

  apiUrl:string = "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";
  constructor(private http:HttpClient) { }

  getFamousPeople():any{
    this.http.get(this.apiUrl);
  }
}
