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
    .subscribe(myObserver);

