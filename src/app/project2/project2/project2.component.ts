import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.scss']
})
export class Project2Component implements OnInit {

  constructor() {}

  ngOnInit() {
    var test = document.getElementById('jquery-test');
    test.style.color = 'blue';
    // var test = $("#jquery-test");
    // test.css({ color: 'blue' });
  }
}
