import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/Planet';
import { PLANETS } from 'src/app/MockPlanets';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = PLANETS;

  constructor() { }

  ngOnInit(): void {
  }

}
