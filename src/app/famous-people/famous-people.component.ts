import { Component, OnInit } from '@angular/core';
import { DevApiService } from '../dev-api.service';
import { HallOfFame } from '../hall-of-fame';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {

  people:HallOfFame = {} as HallOfFame;
  constructor(private peopleApi:DevApiService) { }

  ngOnInit(): void {

    this.peopleApi.getFamousPeople().subscribe((response:HallOfFame) => {
      console.log(response);
      //this.people = response;
    });
    
  }

}
