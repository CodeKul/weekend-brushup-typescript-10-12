"use strict";
var Car = (function () {
    //private speed : number; // state
    //private color : string;
    function Car(speed, color) {
        this.speed = speed;
        this.color = color;
        //this.speed = speed;
        //this.color = color;
    }
    Car.prototype.increaseSpeed = function () {
        return this.speed += 5;
    };
    Car.prototype.increaseSpeedBy = function (speed) {
        return this.speed += speed;
    };
    return Car;
}());
exports.Car = Car;
