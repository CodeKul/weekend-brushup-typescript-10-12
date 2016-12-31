"use strict";
var Calc = (function () {
    function Calc() {
    }
    Calc.prototype.sum = function (num1, num2) {
        var result = num1 + num2;
        //console.log('Addition is of'+(result));
        console.log("Addition is " + result);
        return result;
    };
    return Calc;
}());
exports.Calc = Calc;
var c = new Calc();
c.sum(45, 45);
