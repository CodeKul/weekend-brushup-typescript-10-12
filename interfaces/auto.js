"use strict";
var Auto = (function () {
    function Auto() {
    }
    Auto.prototype.location = function () {
        return 'India';
    };
    Auto.prototype.light = function () {
        return 5;
    };
    Auto.prototype.kms = function () {
    };
    Auto.prototype.capcity = function () {
        return 15;
    };
    return Auto;
}());
exports.Auto = Auto;
