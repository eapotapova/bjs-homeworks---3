"use strict"

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
 
 let newDate = new Date(date);
 let today = new Date();
 
 let valid = true;

 if (isNaN(Number(percent)) === true || Number(percent) < 0 ) {
  console.log( `Параметр <percent> содержит неправильное значение ${percent}`);
  valid = false;
  
 } else if (isNaN(Number(contribution)) === true || Number(contribution) < 0) {
    console.log( `Параметр <contribution> содержит неправильное значение ${contribution}`)
    valid = false;
} else if (isNaN(Number(amount)) === true || Number(amount) <= 0) {
    console.log( `Параметр <amount> содержит неправильное значение ${amount}`)
    valid = false;
} else if (newDate.getFullYear() <= today.getFullYear() ) {
    console.log( `Параметр <date> содержит неправильное значение ${date}`);
    valid = false;
 }

 if (valid === false) {
     return
 }
 
 
 let creditSum = Number(amount) - Number(contribution);
 let month = (newDate.getFullYear() -  today.getFullYear()) * 12 + (newDate.getMonth() - today.getMonth())

 let payment = creditSum*((Number(percent)/100)/12 + ((Number(percent)/100)/12)/(((1+(Number(percent)/100)/12)**month)-1))

 let totalAmount = payment*month
 console.log(totalAmount);
 return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name === ""|| name === "null"|| name === "undefined") {
        name = "Аноним"
    };
    

   let greeting = `Привет, мир! Мeня зовут ${name}`;
   console.log(greeting)
   return greeting;
}
// немного не поняла второе это задание, если честно. 
// здесь может нужно проверить, чтобы было введено имя, а не, например, цифры? 
// не поняла, почему именно null и undefined мы на вводе проверяем. 
// 