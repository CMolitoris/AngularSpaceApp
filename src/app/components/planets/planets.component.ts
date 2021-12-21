import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/Planet';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planetService.getPlanets().subscribe((planets) => this.planets = planets);
  }

  deletePlanet(planet: Planet ): void {
    this.planetService
      .deletePlanet(planet)
      .subscribe(
        () => this.planets = this.planets.filter(e => e.id !== planet.id)
      );
  }

  togglePlanet(planet: Planet): void {
    planet.large = !planet.large;
    this.planetService.togglePlanet(planet).subscribe();
  }

}
