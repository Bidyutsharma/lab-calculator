

var plusbtn = document.getElementById('plus');
plusbtn.onclick = function () {
    var firstnumber = Number(document.getElementById('fn').value);
    var Secondnumber = Number(document.getElementById('sn').value);
    var result = firstnumber + Secondnumber;

    document.getElementById('result').value = result;

}

var minbtn = document.getElementById('minus');
minbtn.onclick = function () {
    var firstnumber = Number(document.getElementById('fn').value);
    var Secondnumber = Number(document.getElementById('sn').value);
    var result = firstnumber - Secondnumber;

    document.getElementById('result').value = result;

}

var mulbtn = document.getElementById('mul');
mulbtn.onclick = function () {
    var firstnumber = Number(document.getElementById('fn').value);
    var Secondnumber = Number(document.getElementById('sn').value);
    var result = firstnumber * Secondnumber;

    document.getElementById('result').value = result;

}

var divbtn = document.getElementById('div');
divbtn.onclick = function () {
    var firstnumber = Number(document.getElementById('fn').value);
    var Secondnumber = Number(document.getElementById('sn').value);
    var result = firstnumber / Secondnumber;

    document.getElementById('result').value = result;

}
var pointbtn = document.getElementById('point');
dpointbtn.onclick = function () {
    var firstnumber = Number(document.getElementById('fn').value);
    var Secondnumber = Number(document.getElementById('sn').value);
    var result = firstnumber / Secondnumber;

    document.getElementById('result').value = result;

}
var percentagebtn = document.getElementById('percentage');
ercentagebtn.onclick = function () {
    var firstnumber = Number(document.getElementById('fn').value);
    var Secondnumber = Number(document.getElementById('sn').value);
    var result = firstnumber / Secondnumber;

    document.getElementById('result').value = result;

}
var exclamationbtn = document.getElementById('exclamation');
exclamationbtn.onclick = function () {
    var firstnumber = Number(document.getElementById('fn').value);
    var Secondnumber = Number(document.getElementById('sn').value);
    var result = firstnumber / Secondnumber;

    document.getElementById('result').value = result;

}



function demo() {

    var res = document.getElementById('time');

    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();

    var Watch = hours + ':' + minutes + ':' + seconds;
    res.innerHTML = Watch;
}

setInterval(demo, 1000);