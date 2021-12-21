import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable,of } from 'rxjs';
import { Planet } from 'src/app/Planet';
// import { PLANETS } from 'src/app/MockPlanets';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private apiUrl = 'http://localhost:5000/planets';
  constructor(private http:HttpClient) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.apiUrl);
  }

  deletePlanet(planet: Planet): Observable<Planet> {
    const url = `${this.apiUrl}/${planet.id}`;
    return this.http.delete<Planet>(url);
  }

  togglePlanet(planet: Planet): Observable<Planet> {
    const url = `${this.apiUrl}/${planet.id}`;
    return this.http.put<Planet>(url, planet, httpOptions);
  }
}
