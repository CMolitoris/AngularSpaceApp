import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { PlanetsComponent } from './components/planets/planets.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PlanetItemComponent } from './components/planet-item/planet-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    PlanetsComponent,
    NavBarComponent,
    PlanetItemComponent
  ],
  imports: [
    BrowserModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
