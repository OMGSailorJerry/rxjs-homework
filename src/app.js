"use strict";

import Rx from 'rxjs/Rx';

let span = document.querySelector('span');

let myObservable1 = Rx.Observable.fromEvent(input1, 'input');

let myObserver = {
    next: value => {
        span.textContent = value;
    }
};
