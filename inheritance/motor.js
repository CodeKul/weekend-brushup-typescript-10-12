"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var machine_1 = require('./machine');
var Motor = (function (_super) {
    __extends(Motor, _super);
    function Motor() {
        _super.apply(this, arguments);
    }
    return Motor;
}(machine_1.Machine));
exports.Motor = Motor;
