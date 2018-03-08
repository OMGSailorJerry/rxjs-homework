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
    // .map(event => event.target.value)
    .pluck('target', 'value')
    .debounceTime(500)
    .distinctUntilChanged()
    .subscribe(myObserver);

 