"use strict";

import Rx from 'rxjs/Rx';

let input = document.querySelector('input');

let myObservable = Rx.Observable.of(1, 2, 3, 4, 5);

let myObserver = {
    next: (event) => {
        console.log(event);
    }
};

myObservable
    .scan((total, currentValue) => {
        return total + currentValue;
    }, 0)
    // .reduce((total, currentValue) => {
    //     return total + currentValue;
    // }, 0)
    .subscribe(myObserver);

