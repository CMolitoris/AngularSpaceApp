import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Planet } from 'src/app/Planet';
import { PLANETS } from 'src/app/MockPlanets';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  
  constructor() { }

  getPlanets(): Observable<Planet[]> {
    const planets = of(PLANETS);
    return planets;
  }
}
