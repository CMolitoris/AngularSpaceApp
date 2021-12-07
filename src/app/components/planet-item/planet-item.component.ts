import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Planet } from 'src/app/Planet';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.css']
})
export class PlanetItemComponent implements OnInit {
  @Input() planet!: Planet;
  @Output() onDeletePlanet: EventEmitter<Planet> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(planet: Planet): void {
    this.onDeletePlanet.emit(planet);
  }

}
