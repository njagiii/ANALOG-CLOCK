var second = 0
var minute = 0
var hour = 0
var d = new Date()
setInterval(() => {
  d = new Date();
  second = d.getSeconds() * 6;
  minute = d.getMinutes() * 6;
  hour = d.getHours() * 30 
  
  document.getElementById("hour-hand").style.transform = "rotate("+ hour + "deg)"
  document.getElementById("minute-hand").style.transform = "rotate("+ minute + "deg)"
  document.getElementById("seconds-hand").style.transform = "rotate("+ second + "deg)"
}, 1000);