"use strict"

function getSolutions( a, b, c ) {
    
    let result = new Object();
    let D = b**2 - 4 * a * c;
    if (D < 0) {
        result.D = D;

    } else if ( D === 0) {
        
        let x1 = -b / (2 * a);
        result.D = D;
        result.roots = [x1];

    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        result.D = D;
        result.roots = [x1,x2];
    }
    return result;
}

function showSolutionsMessage( a, b, c ) {
    
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots === undefined) {
      console.log ("Уравнение не имеет вещественных корней");
    } else if (result.roots.length === 1) {
      console.log (`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else {
      console.log (`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);



function getPersonData(secretData) {
 
    function getName(number) {
     let result;
     if (number === 0) {
       result = "Родриго";
     } else if (number === 1) {
       result = "Эмильо";
     }
    return result;
    }
   
    return {
     firstName: getName(secretData.aaa),
     lastName: getName(secretData.bbb)
    }
}
   
console.log(getPersonData({aaa:0,bbb:0}));
console.log(getPersonData({aaa:0,bbb:1}));
console.log(getPersonData({aaa:1,bbb:0}));
console.log(getPersonData({aaa:1,bbb:1}));


function getAverageScore( data ){

    let totalAverage = 0;
    let count = 0;
   
    for (let prop in data)  {
     
     let marks = data[prop];
  
  
     function getAverage(marks) {
      let sum = 0;
      
      for (let i = 0; i < marks.length; i++) {
         sum += marks[i];
      };
  
      let averageMark = sum/marks.length;
      return averageMark;
   
    } 
  
    let result = getAverage(marks);
    totalAverage += result;
    count+=1;
   
    data[prop] = getAverage(marks)
    data.avarage = totalAverage/count;  
 }
   
 return data;

}
  

  
console.log(getAverageScore({
    algebra:[2,4,5,2,3,4],
    geometry:[2,4,5],
    russian:[3,3,4,5],
    physics: [5,5],
    music: [3,3,4],
    english: [2,2,5],
    biology: [5,5,3],
    math: [5,5,4],
    chemistry: [2]
} ))



