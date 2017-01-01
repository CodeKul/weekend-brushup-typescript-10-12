"use strict";
var Machine = (function () {
    function Machine(num1, num2, num3) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.myObj = {};
        console.log("Num1 " + num1);
        console.log("Num2 " + num2);
        console.log("Num3 " + num3);
    }
    return Machine;
}());
exports.Machine = Machine;
