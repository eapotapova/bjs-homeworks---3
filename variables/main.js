"use strict"

function setDailyRhythm(wakeUpTime, bedTime)  {

  setAlarm(wakeUpTime, goodMorning) 
  setAlarm(bedTime,goodNight);
 
}
 
const goodNight = ()=> alert("Пора спать!")
 
const goodMorning = ()=> alert("Доброе утро!")
 
function setAlarm(time,callback) {
 
   const timerId = setInterval(()=> {
     const now = new Date();
     let hh = now.getHours();
       if (hh < 10) hh = '0'+ hh;
 
     let mm = now.getMinutes();
       if (mm < 10) mm = '0'+ mm;
 
      let systemTime = `${hh}:${mm}`
    
      return checkTime(systemTime)}, 1000) 
    
    const checkTime = (systemTime) => {
        
      if ( systemTime === time) {
        callback()
     }
 
     setTimeout(() => { clearInterval(timerId) }, 500)
   }
}
 
 
setDailyRhythm("14:53" , "14:57") 

