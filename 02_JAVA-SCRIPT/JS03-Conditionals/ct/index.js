/* ----------------------------------------------- *
const name = "Veli";
const age = 20;
console.log(name + age);
/* ----------------------------------------------- */

/* ----------------------------------------------- *
if (age > 50) {
  console.log("your age is bigger than 50");
} else if (age > 30) {
  console.log("your age is bigger than 30 and smaller than 50");
} else{
    console.log('else worked..');
}
/* ----------------------------------------------- */


/* 
START 
INPUT hours, rate
IF hours < 40 
    pay = rate * hours
ELSE
    pay = 40 * rate + (hours - 40) * rate * 1.5
PRINT pay
END
*/

/* ----------------------------------------------- *

const hours = Number(prompt("Hours: "));
const rate = Number(prompt("Rate: "));
let pay = null;

if (hours < 40) {
  pay = rate * hours;
} else {
    pay = 40 * rate + (hours - 40) * rate * 1.5
}

console.log(`The wage is: ${pay}`);
/* ----------------------------------------------- */

/* ----------------------------------------------- *
const num = 10;

if(num > 0) console.log('positive'); // if there is only one line code you dont need to use {}.
else if(num < 0) console.log('negative');
else console.log('neutral');
/* ----------------------------------------------- */

/* ----------------------------------------------- *

const num1 = parseFloat(prompt('Num1: '));
const num2 = parseFloat(prompt('Num2: '));
const num3 = parseFloat(prompt('Num3: '));

if(num1 > num2 && num1 > num3) console.log('max number: ', num1);
else if(num2 > num1 && num2 > num3) console.log('max number: ', num2);
else console.log('max number: ', num3);

/* ----------------------------------------------- */

/* ----------------------------------------------- *
const num1 = parseFloat(prompt('Num1: '));
const num2 = parseFloat(prompt('Num2: '));
const num3 = parseFloat(prompt('Num3: '));

let max = num1;

if(num2 > max) max = num2
if(num3 > max) max = num3

console.log('max number: ', max);

/* ----------------------------------------------- */

//* && (VE) -> Ilk FALSE degerini dondurur (hepsi true is sonuncuyu doner)
// console.log('a' && 'b' && 'c' && 'd'); // since all of them are truth value it returns last turth value
// console.log('a' && '' && 'c' && 'd'); // eger ki false varsa onu dondurur

// if('a' && 'b' && 'c' && 'd'){
//     console.log('calisti');
// }

// if('a' && '' && 'c' && 'd'){
//     console.log('calisti');
// }


// //* || (VEYA) -> Ilk TRUE degerini doner
// console.log('a' || 'b' || 'c' || 'd'); // hepsi true deger tasidigi icin ilk true deger tasiyan veriyi dondurur
// console.log('a' || 'b' || '' || 'd'); // icinde fasly deger tasiyan bir verinin olmasi onemli degil egerki bir tane truth degerini tasiyan veri varsa her zaman onu dondur


// //* ! (DEGIL) -> Tersine cevirir
// console.log(!'a');
// console.log(!0);



/* ----------------------------------------------- */
/* ----------------------------------------------- */
/************************************************ */

// for(let counter = 1; counter <=10; counter++){
//   console.log("ondia-acedemy");
  
// }
// //birden 10 a kadar sayilari topla
// let toplam=0;
// for( let i=1;i<=10;i++){
//   toplam+=i
// }

// console.log(`toplam: ${toplam}`);

/************************************************** */


