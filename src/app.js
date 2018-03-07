"use strict";

import Rx from 'rxjs/Rx';

let myObservable = Rx.Observable.interval(1000);

let myObserver = {
    next: (value) => {
        console.log(value);
    },
    error: (error) => {
        console.log('Error: ', error);
    }
};

myObservable
    .filter((value) => {
      return value % 2 === 0;  
    })
    .subscribe(myObserver);

