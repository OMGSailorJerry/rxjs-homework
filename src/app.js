"use strict";

import Rx from 'rxjs/Rx';

let mySubject = new Rx.Subject();

mySubject.subscribe({
    next: (value) => {
        console.log(value);
    },
    error: (error) => {
        console.log(error);
    },
    complete: () => {
        console.log('Completed!');
    }
});

mySubject.subscribe({
    next: (value) => {
        console.log(value);
    }
});

mySubject.next('New data');
// mySubject.error('This is error');
// mySubject.complete();