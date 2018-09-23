import { Component, OnInit } from '@angular/core';
import {Data} from './../data';
import {DataService} from './../data.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  inviteAlert = false;
  nameAlert = false;
  surnameAlert = false;
  ageAlert = false;
  data: Data = {
    name: '',
    surname: '',
    age: null
  };

  constructor( private dataSerivce: DataService) { }

  ngOnInit() {
  }
}
