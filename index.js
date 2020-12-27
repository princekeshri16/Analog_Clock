setInterval(() =>{
var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var hourAngle = hour*30+(min/2)
var minAngle = 6*min
var secAngle = 6*sec
Hhand.style.transform = `rotate(${hourAngle}deg)`;
Mhand.style.transform = `rotate(${minAngle}deg)`;
Shand.style.transform = `rotate(${secAngle}deg)`;
},1000)