"use strict";

import Rx from 'rxjs/Rx';

let input = document.querySelector('input');

let myObservable = Rx.Observable.fromEvent(input, 'input');

let myObserver = {
    next: (event) => {
        console.log(event.target.value);
    }
};

myObservable
    .debounceTime(500)
    .distinctUntilChanged()
    .subscribe(myObserver);

