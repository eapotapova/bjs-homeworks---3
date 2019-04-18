"use strict"
function checkTime() {
  const now = new Date();
  let hh = now.getHours();
  if (hh < 10) hh = '0'+ hh;

  let mm = now.getMinutes();
  if (mm < 10) mm = '0'+ mm;

  let systemTime = `${hh}:${mm}`
  
  return systemTime
}

function setDailyRhythm(wakeUpTime, bedTime) {

 const timerId = setInterval (function setAlarm() {
  if (checkTime() === wakeUpTime) {
    goodMorning()
  } else if (checkTime() === bedTime) {
    goodNight()
  }
  },1000)
  
  const goodMorning = ()=> alert("Доброе утро!")
  const goodNight = ()=> alert ("Пора спать!")
 
  setTimeout(() => { clearInterval(timerId) }, 1000);
} 

setDailyRhythm("07:00", "00:12")

