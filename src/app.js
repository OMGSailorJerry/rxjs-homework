"use strict";

import Rx from 'rxjs/Rx';

let button = document.querySelector('button');

let observer = {
    next: function(value) {
        console.log(value);
    },
    error: function(error) {
        console.log(error);
    },
    complete: function() {
        console.log('Completed');
    }
}

Rx.Observable.fromEvent(button, 'click')
    .subscribe(observer);

    