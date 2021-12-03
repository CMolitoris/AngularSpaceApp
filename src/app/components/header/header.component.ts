import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Fortune Favors the Bold';
  constructor() { }

  ngOnInit(): void {
  }

  toggleButtonClick() {
    console.log("Button clicked")
  }

}
