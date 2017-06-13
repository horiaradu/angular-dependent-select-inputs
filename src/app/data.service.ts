import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {

  constructor() {
  }

  getObject(): Observable<any> {
    return Observable.of({
      first: {
        name: 'a',
        id: 1,
      },
      second: {
        name: 'bb',
        id: 22,
      }
    });
  }

  getSelectOptions(): Observable<any> {
    return Observable.of([
      {
        id: 1, name: 'a',
        secondOpts: [
          { name: 'aa', id: 11 },
          { name: 'bb', id: 22 },
        ],
      },
      {
        id: 2, name: 'b',
        secondOpts: [
          { name: 'cc', id: 11 },
          { name: 'dd', id: 33 },
        ],
      }
    ]);
  }
}
