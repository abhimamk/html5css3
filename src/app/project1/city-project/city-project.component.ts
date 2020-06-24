import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-project',
  templateUrl: './city-project.component.html',
  styleUrls: ['./city-project.component.scss']
})
export class CityProjectComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  nextScreen() {
    this.route.navigate(['/project2']);
  }
}
