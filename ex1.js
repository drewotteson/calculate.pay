"use strict";

var hours = hoursInput();
var wage = wageInput();

function hoursInput() {
    var hours = prompt("How many hours did you work?");
    return (hours);
}
function wageInput() {
    var wage = prompt("How much do you make an hour?");
    return (wage);
}
function calculatePay(hours,wage) {
    var pay = hours * wage;
    console.log(pay);
}
function otPay(hours,wage) {
    var overtimehours  = hours - 40;
    var overtimepay = (hours - overtimehours) * (wage) + (overtimehours * wage * 1.5);
    console.log(Math.round(overtimepay * 100)/100);
}
function evaluate(hours,wage) {
    if (hours > 40) {
        otPay();
    } else { 
        calculatePay();
    }
}
otPay(hours,wage);
   
    
    






