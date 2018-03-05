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

// Rx.Observable.fromEvent(button, 'click')
let subscription = Rx.Observable.create(function(obs) {
    // obs.next('A value');
    // obs.error('Error');
    // setTimeout(() => {
    //     obs.complete();
    // }, 2000);
    // obs.next('A second value');
    
    button.onclick = (event) => {
        obs.next(event);
    };
})
.subscribe(observer);

setTimeout(() => {
    subscription.unsubscribe();
}, 5000);

    