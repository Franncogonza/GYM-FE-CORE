import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
pageTitle: string = 'GYM-FE-CORE'
  constructor() { }

  ngOnInit(): void {
  }

}
