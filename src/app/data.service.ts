import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Data} from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  save(data: Data): Observable<any> {
    return Observable.create(observer => {
      localStorage.setItem('data', JSON.stringify(data));
      observer.next(true);
    });
  }

  load(): Observable<Data | null> {
    return Observable.create(observer => {
      const dataString: string | null = localStorage.getItem('data');
      if (dataString) {
        try {
          const data: Data = JSON.parse(dataString);
          observer.next(data);
        } catch (e) {
          console.error(e);
          observer.next(null);
        }
      } else {
        observer.next(null);
      }
    });
  }

}
