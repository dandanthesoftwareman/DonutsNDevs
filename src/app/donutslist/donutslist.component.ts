import { Component, OnInit } from '@angular/core';
import { DonutApiService } from '../donut-api.service';
import { DonutList } from '../donut-list';

@Component({
  selector: 'app-donutslist',
  templateUrl: './donutslist.component.html',
  styleUrls: ['./donutslist.component.css']
})
export class DonutslistComponent implements OnInit {

  donuts:DonutList = {} as DonutList
  constructor(private donutApi:DonutApiService) { }

  ngOnInit(): void {
    this.donutApi.getDonuts().subscribe((response:DonutList) => {
      // console.log(response);
      this.donuts = response;
    })
  }

}
