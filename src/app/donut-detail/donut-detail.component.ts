import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut } from '../donut';
import { DonutApiService } from '../donut-api.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {

  displayDonut:Donut = {} as Donut;
  constructor(private route:ActivatedRoute, private donutService:DonutApiService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    
    this.donutService.getSingleDonut(id).subscribe((response: Donut) => {
      console.log(response);
      this.displayDonut = response;
    })
  }

}
