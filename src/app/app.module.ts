import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { HttpClientModule } from '@angular/common/http'
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PlanetItemComponent } from './components/planet-item/planet-item.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { FormsModule } from '@angular/forms';
import { TitlecasingPipe } from './titlecasing.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    PlanetsComponent,
    NavBarComponent,
    PlanetItemComponent,
    FavoriteComponent,
    TitleCaseComponent,
    TitlecasingPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
