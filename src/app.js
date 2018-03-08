"use strict";

import Rx from 'rxjs/Rx';

let input = document.querySelector('input');

let myObservable = Rx.Observable.fromEvent(input, 'input');

let myObserver = {
    next: (value) => {
        console.log(value);
    }
};

myObservable
    .pluck('target', 'value')
    .subscribe(myObserver);

 