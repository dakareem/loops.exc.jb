// loops in javascript

// תרגיל מספר 1 :
// כתוב תוכנית שמדפיסה 10 פעמים את המילה 
//  לקונסול "hello"


for(let times = 0; times < 10; times = times + 1) {
    console.log("hello")   
}


// תרגיל מספר 2 :
//  כתוב תוכנית שמדפיסה 10 פעמים את המילה
//  hello 
//  עם מספר הפעמים.

for(let times =1; times <= 10; times = times + 1){
    console.log("hello" , times)
}



// תרגיל מספר 3 :
// כתוב תוכנית שבודקת ומדפיסה את כל המספרים הזוגיים בין 1 ל 10.


for(let n = 1; n <= 10; n++){
    if(n % 2 === 0){
        console.log(n)
    }
}



// תרגיל מספר 4 :
// כתוב תוכנית שמדפיסה את כל המספרים האי זוגיים בין 4 ל 30


// option 1:

for(let n = 4; n <= 30; n++){
    if(n % 2 === 1){
        console.log(n)
    }
}


// option 2 :

for(let n = 4; n <= 30; n++){
    if(n % 2 !== 0){
        console.log(n)
    }
}




// תרגיל מספר 5 :
// כתוב תוכנית שסוכמת את כל המספרים בין 1 ל
// 1+2+2+2+..+45
// ומדפיסה את התשובה

let sum = 0
for (let num = 1; num <= 45; num++){
sum = sum + num
console.log(sum)
}




// תרגיל מספר 6 :
//  כתוב תוכנית שכופלת את כל המספרים בין 1 ל30 ומדפיסה את התשובה.


let sum = 1
for (let num = 1; num <= 30; num++){
    sum = sum * num
  console.log(sum)  
}