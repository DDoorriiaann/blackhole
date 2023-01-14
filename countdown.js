function gettime() {
  var date = new Date();
  var time = date.getTime() / 1000;
  time = 1673946000 - Math.floor(time);
  return time;
}

var interval = setInterval(function () {
  var count = gettime();
  var hours = Math.floor(count / 3600);
  var minutes = Math.floor((count - hours * 3600) / 60);
  var seconds = Math.floor(count - hours * 3600 - minutes * 60);
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
