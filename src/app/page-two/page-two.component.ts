import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Data} from './../data';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  accessGranted = false;
  ageAlert = false;
  data: Data;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.load()
      .subscribe((data: Data) => {
        console.log(data);
        this.data = data;
      }, error => {
        console.error(error);
      });
  }

  accessClick() {
    if (this.data && this.data.age > 18) {
      this.accessGranted = true;
    } else {
      this.ageAlert = true;
    }
  }
}
