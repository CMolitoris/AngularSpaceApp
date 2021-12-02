import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Welcome to your all-in-one space application!';
  constructor() { }

  ngOnInit(): void {
  }

  toggleButtonClick() {
    console.log("Button clicked")
  }

}
