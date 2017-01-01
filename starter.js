"use strict";
var auto_1 = require('./interfaces/auto');
var machine_1 = require('./inheritance/machine');
var mobile_1 = require('./inheritance/mobile');
var device_1 = require('./inheritance/device');
var car_1 = require('./classes-objects/car');
var tiger_1 = require('./abstractclasses/tiger');
var Starter = (function () {
    function Starter() {
    }
    Starter.prototype.classesAndObjects = function () {
        var car = new car_1.Car(10);
        console.log("Increased Speed is " + car.increaseSpeed());
        car.increaseSpeedBy(10);
    };
    Starter.prototype.inheritance = function () {
        var device = new device_1.Device('India', 15, 5);
        console.log("Device Battery Level - " + device.batteryLevel());
        var mobile = new mobile_1.Mobile(true);
        console.log("Mobile Battery Level - " + mobile.batteryLevel());
        var deviceMobile = new mobile_1.Mobile(true);
        var mobileDevice = new device_1.Device('India', 15, 5);
        console.log("Mobile Device Battery Level - " + mobileDevice.batteryLevel());
        var machine = new machine_1.Machine(10, 0, 20);
    };
    Starter.prototype.abstractClasses = function () {
        var animal = new tiger_1.Tiger();
        animal.walk();
        var tiger = new tiger_1.Tiger();
        tiger.walk();
    };
    Starter.prototype.interfaces = function () {
        var auto = new auto_1.Auto();
        auto.capcity();
        auto.kms();
        auto.light();
        auto.location();
    };
    Starter.prototype.loops = function () {
        var arr = [];
        arr.push('Android');
        arr.push('Apple');
        arr.push('Java');
        arr.push('TypeScript');
        arr.push('Node');
        arr.forEach(function (s, i) { return console.log("S is " + s + " index is " + i); });
    };
    return Starter;
}());
exports.Starter = Starter;
