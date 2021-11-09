import { Component, OnInit } from '@angular/core';
import { interestCalculator } from 'src/Models/interestCalculator';

@Component({
  selector: 'app-interest-calculation',
  templateUrl: './interest-calculation.component.html',
  styleUrls: ['./interest-calculation.component.css']
})
export class InterestCalculationComponent implements OnInit {
interestCal:interestCalculator=new interestCalculator();

  constructor() { }

  ngOnInit(): void 
  {
    this.interestCal=
    {
      Principle:4,
      RateOfInterest:5,
      NoOfYears:5
    };
  }

  SaveClick($event:any)
  {
    console.log(this.interestCal);
  }

}
