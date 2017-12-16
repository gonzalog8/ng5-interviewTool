import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule, MatCard } from '@angular/material/';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title;
  interviewer;
  candidate;

  constructor() {
    this.title = 'Interview Tool';
    this.interviewer = 'Pepe';
    this.candidate = 'Fulanito';
  }

  ngOnInit() {
  }

}
