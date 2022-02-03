import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  filled = true;

  constructor() { }

  ngOnInit(): void {
  }

  invert() {
    this.filled = !this.filled;
  }

}
