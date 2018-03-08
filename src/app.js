"use strict";

import Rx from 'rxjs/Rx';

let button = document.querySelector('button');
let div = document.querySelector('div');

let buttonClickObs = Rx.Observable.fromEvent(button, 'click');

let clickEmmited = new Rx.BehaviorSubject('Not Clicked!');

buttonClickObs.subscribe(event => clickEmmited.next(`${event.target.nodeName} was clicked!`));
clickEmmited.subscribe(value => {div.textContent = value});