"use strict";

import Rx from 'rxjs/Rx';

let button = document.querySelector('button');

let observable = Rx.Observable.interval(1000);

let observer = {
    next: (value) => {
        console.log(value);
    }
};

observable.map((value) => {
    return `Number is - ${value * 2}`;
})
.throttleTime(1000)
.subscribe(observer);