var span = document.getElementById("time-location");
var hoursSpan = document.getElementById("hours");
var minutesSpan = document.getElementById("minutes");

function time() {
  var d = new Date();
  var options = { timeZone: "Africa/Lagos", hour12: false };
  var timeString = d.toLocaleString("en-US", options);
  var timeParts = timeString.split(" ");
  var timeValues = timeParts[1].split(":");
  hoursSpan.textContent = timeValues[0];
  minutesSpan.textContent = timeValues[1];
}

setInterval(time, 1000);
