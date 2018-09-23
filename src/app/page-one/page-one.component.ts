import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
import {Data} from './../data';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  data: Data = new Data();
  dataForm: FormGroup;

  get name() { return this.dataForm.get('name'); }
  get surname() { return this.dataForm.get('surname'); }
  get age() { return this.dataForm.get('age'); }

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataForm = new FormGroup({
      'name': new FormControl(this.data.name, [
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ]),
      'surname': new FormControl(this.data.surname, [
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ]),
      'age': new FormControl(this.data.age, [
        Validators.required,
        Validators.pattern('[0-9]+')
      ])
    });
  }

  onSubmit() {
    if (this.dataForm.valid) {
      this.save();
    }
  }

  save() {
    this.dataService.save(this.dataForm.value)
      .subscribe(() => {
        console.log('Saving success!');
        this.router.navigate(['page-two']);
      }, error => {
        console.error(error);
      });
  }
}
