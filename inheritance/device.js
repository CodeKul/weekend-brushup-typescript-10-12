"use strict";
var Device = (function () {
    function Device(producer, battery, life) {
        this.producer = producer;
        this.battery = battery;
        this.life = life;
    }
    Device.prototype.batteryLevel = function () {
        return this.battery;
    };
    return Device;
}());
exports.Device = Device;
exports.i = 10;
