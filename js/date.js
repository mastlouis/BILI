// 12:00am, February 22nd, 2020
var eventDate = new Date(2020, 1, 22)
var days = Math.floor(Math.abs(eventDate.getMilliseconds() - Date.now()) / (1000*60*60*24))
document.getElementById("countdown").innerHTML = days + " " +  document.getElementById("countdown").innerHTML;