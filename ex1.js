"script";
var hoursworked;
var rateperhour;
var totalpay;
var overtimehours;
var overallpay;
var hourcalc;
var overallcalc;

hoursworked = 47
rateperhour = 23.43
totalpay = hoursworked * rateperhour;
overtimehours = hoursworked - 40;
overallpay = overtimehours * rateperhour * 1.5;
hourcalc = hoursworked - overtimehours;
overallcalc = hourcalc * rateperhour + overallpay;
if (hoursworked >= 40) {
    console.log(Math.round(overallcalc * 100)/100);
}else { (hoursworked <= 40) 
    console.log(totalpay);
}









