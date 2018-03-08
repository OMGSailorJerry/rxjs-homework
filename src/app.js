"use strict";

import Rx from 'rxjs/Rx';

let button = document.querySelector('button');

let myObservable1 = Rx.Observable.fromEvent(button, 'click');
let myObservable2 = Rx.Observable.interval(500);

let observer2 = (value) => console.log(value);

myObservable1
    .switchMap(() => myObservable2)
    .subscribe(observer2);