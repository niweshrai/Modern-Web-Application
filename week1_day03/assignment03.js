'use strict';

const EventEmitter = require('events');

class Clock extends EventEmitter{
        constructor(){
        super();
        this.Ticker();
    }
    Ticker(){
        const self = this;

    setInterval(function(){
        self.emit('tick');
    },1000); 
    }
}

const ticker = new Clock();
ticker.on("tick",function(){
    console.log("woohoo");
});