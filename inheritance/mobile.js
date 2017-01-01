"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var device_1 = require('./device');
var Mobile = (function (_super) {
    __extends(Mobile, _super);
    function Mobile(isTouch) {
        _super.call(this, 'India', 100, 5);
        this.isTouch = isTouch;
    }
    Mobile.prototype.batteryLevel = function () {
        return _super.prototype.batteryLevel.call(this) + 10;
    };
    return Mobile;
}(device_1.Device));
exports.Mobile = Mobile;
