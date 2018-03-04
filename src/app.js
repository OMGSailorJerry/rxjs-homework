"use strict";

import Rx from 'rxjs/Rx';

let button = document.querySelector('button');

Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .map((data) => { return data.clientY})
    .subscribe(
        (coord) => console.log(coord)
    );
    