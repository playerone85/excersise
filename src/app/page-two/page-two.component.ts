import { Component, OnInit } from '@angular/core';
import {Data} from './../data';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  inviteAlert = false;
  accessGranted = false;
  ageAlert = false;
  data: Data = {
    name: '',
    surname: '',
    age: null
  };

  constructor() { }

  ngOnInit() {
    this.data.age = 20;
  }

  accessClick() {
    if (this.data.age > 18) {
      this.accessGranted = true;
    } else {
      this.ageAlert = true;
    }
  }
}
