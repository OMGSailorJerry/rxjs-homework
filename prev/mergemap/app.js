"use strict";

import Rx from 'rxjs/Rx';

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let span = document.querySelector('span');

let myObservable1 = Rx.Observable.fromEvent(input1, 'input');
let myObservable2 = Rx.Observable.fromEvent(input2, 'input');

let myObserver = {
    next: value => {
        span.textContent = value;
    }
};

myObservable1.mergeMap(
    event1 => {
        return myObservable2.map(event2 => {
            return `${event1.target.value} ${event2.target.value}`;
        });
    })
    .subscribe(myObserver);