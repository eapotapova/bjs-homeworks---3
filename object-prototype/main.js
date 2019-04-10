function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
   const now  = + new Date();

   const birth = + new Date(birthday);

   const diff = now-birth;

   const age = diff/(1000*60*60*24*365.242);
   
 
   const result = age > 18 ? true : false;
   return result;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    const sound = animal.sound;
    const result = (animal.sound === undefined) ? null : sound;
    return result;

}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    
    let sum = 0;

    for (let i=0; i<marks.length; i++) {        

        sum += Number(marks[i]);
    
    };
    
 
    const average = sum/marks.length;

    const roundedAverage = Math.round(average);

    return roundedAverage;
}